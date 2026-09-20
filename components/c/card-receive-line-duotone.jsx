import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j8ay_ac4z.css';
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
		"content": `<g class="ipq1z-bjh"><path class="j8ay_ac4z"/><path class="uwaa3xb6z"/><path class="vqfns1bta"/><path class="baxqrnb6h"/><path class="j-a1kqp-o"/></g>`,
		"fallback": "solar:card-receive-line-duotone",
	});
}

export default Component;
