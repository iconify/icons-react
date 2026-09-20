import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j_kybcbiy.css';
import '../../css/j/jwvedsvir.css';
import '../../css/o/oltiaob-e.css';
import '../../css/x/x1qn8acjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j_kybcbiy"/><path class="jwvedsvir"/><path class="oltiaob-e"/><path class="x1qn8acjm"/></g>`,
		"fallback": "solar:bonfire-line-duotone",
	});
}

export default Component;
