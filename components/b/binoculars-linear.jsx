import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g3sj8mbxp.css';
import '../../css/p/pxoue4g9a.css';
import '../../css/h/hf2jg-64g.css';
import '../../css/z/zyqpj0bta.css';
import '../../css/p/p_ni59b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g3sj8mbxp"/><path class="pxoue4g9a"/><path class="hf2jg-64g"/><path class="zyqpj0bta"/><path class="p_ni59b0m"/></g>`,
		"fallback": "solar:binoculars-linear",
	});
}

export default Component;
