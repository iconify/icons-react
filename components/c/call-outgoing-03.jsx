import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hha2tsbcc.css';
import '../../css/b/bij_adcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hha2tsbcc"/><path class="bij_adcel"/></g>`,
		"fallback": "hugeicons:call-outgoing-03",
	});
}

export default Component;
