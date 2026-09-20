import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/blyr41bdj.css';
import '../../css/m/mv09pcb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="blyr41bdj"/><path class="mv09pcb8e"/></g>`,
		"fallback": "mage:fire-b",
	});
}

export default Component;
