import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8gfeydty.css';
import '../../css/b/b-0l19byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t8gfeydty"/><path class="b-0l19byj"/></g>`,
		"fallback": "hugeicons:case-upper",
	});
}

export default Component;
