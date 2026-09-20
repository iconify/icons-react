import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdehrabjb.css';
import '../../css/j/j09a20omq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdehrabjb"/><path class="j09a20omq"/></g>`,
		"fallback": "majesticons:git-commit",
	});
}

export default Component;
