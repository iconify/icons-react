import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9s-s9bxy.css';
import '../../css/u/uwaa3xb6z.css';
import '../../css/v/vqfns1bta.css';
import '../../css/b/baxqrnb6h.css';
import '../../css/j/j-a1kqp-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9s-s9bxy"/><path class="uwaa3xb6z"/><path class="vqfns1bta"/><path class="baxqrnb6h"/><path class="j-a1kqp-o"/></g>`,
		"fallback": "solar:card-send-line-duotone",
	});
}

export default Component;
