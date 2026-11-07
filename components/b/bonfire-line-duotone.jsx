import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6tc07bpg.css';
import '../../css/j/jwvedsvir.css';
import '../../css/c/cwsxc8iar.css';
import '../../css/x/x1qn8acjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n6tc07bpg"/><path class="jwvedsvir"/><path class="cwsxc8iar"/><path class="x1qn8acjm"/></g>`,
		"fallback": "solar:bonfire-line-duotone",
	});
}

export default Component;
