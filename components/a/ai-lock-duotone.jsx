import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b29jovbrz.css';
import '../../css/c/c0ri8fdyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b29jovbrz"/><path class="c0ri8fdyu"/></g>`,
		"fallback": "si:ai-lock-duotone",
	});
}

export default Component;
