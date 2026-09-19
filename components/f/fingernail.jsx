import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nn4_--rny.css';
import '../../css/g/g7qlcfhvp.css';
import '../../css/m/mv30ser-y.css';
import '../../css/x/x9avr_b1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nn4_--rny"/><path class="g7qlcfhvp"/><rect class="mv30ser-y"/><path class="x9avr_b1n"/></g>`,
		"fallback": "icon-park-outline:fingernail",
	});
}

export default Component;
