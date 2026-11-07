import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/g/g40jultif.css';
import '../../css/g/g80rf7b8i.css';
import '../../css/q/qdmq4erhx.css';
import '../../css/o/omn9g2b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="g40jultif"/><path class="g80rf7b8i"/><path class="qdmq4erhx"/><path class="omn9g2b_e"/></g>`,
		"fallback": "solar:floor-lamp-minimalistic-line-duotone",
	});
}

export default Component;
