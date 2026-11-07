import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x6v2ivbfo.css';
import '../../css/w/wwmhxmb7s.css';
import '../../css/h/hf2jg-64g.css';
import '../../css/q/ql78khb5l.css';
import '../../css/p/p_ni59b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x6v2ivbfo"/><path class="wwmhxmb7s"/><path class="hf2jg-64g"/><path class="ql78khb5l"/><path class="p_ni59b0m"/></g>`,
		"fallback": "solar:binoculars-linear",
	});
}

export default Component;
