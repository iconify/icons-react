import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h4fu5v_la.css';
import '../../css/l/lvhb8mgml.css';
import '../../css/e/emjm_bcem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h4fu5v_la"/><path class="lvhb8mgml"/><path class="emjm_bcem"/></g>`,
		"fallback": "covid:graph-cured-stable",
	});
}

export default Component;
