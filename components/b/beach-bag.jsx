import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c67lv1b0b.css';
import '../../css/n/n16h7snqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c67lv1b0b"/><path class="n16h7snqp"/></g>`,
		"fallback": "iconoir:beach-bag",
	});
}

export default Component;
