import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fzcs1gntt.css';
import '../../css/y/y4t1hquai.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="fzcs1gntt"/><path class="y4t1hquai"/></g>`,
		"fallback": "cryptocurrency-color:huc",
	});
}

export default Component;
