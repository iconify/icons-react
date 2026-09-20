import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/v/vqfns1bta.css';
import '../../css/h/hun_apbtl.css';
import '../../css/j/j-a1kqp-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="vqfns1bta"/><path class="hun_apbtl"/><path class="j-a1kqp-o"/></g>`,
		"fallback": "solar:card-line-duotone",
	});
}

export default Component;
