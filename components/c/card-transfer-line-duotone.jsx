import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h9njkdbfq.css';
import '../../css/l/l6htmv4au.css';
import '../../css/a/aq84iuhhy.css';
import '../../css/v/vqfns1bta.css';
import '../../css/j/j-a1kqp-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h9njkdbfq"/><path class="l6htmv4au"/><path class="aq84iuhhy"/><path class="vqfns1bta"/><path class="j-a1kqp-o"/></g>`,
		"fallback": "solar:card-transfer-line-duotone",
	});
}

export default Component;
