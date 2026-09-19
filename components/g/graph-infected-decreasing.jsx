import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gph_qxhqv.css';
import '../../css/n/nsk92acve.css';
import '../../css/x/x2x40i-at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gph_qxhqv"/><path class="nsk92acve"/><path class="x2x40i-at"/></g>`,
		"fallback": "covid:graph-infected-decreasing",
	});
}

export default Component;
