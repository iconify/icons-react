import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fyw76ccin.css';
import '../../css/g/g6h637vus.css';
import '../../css/h/hsy00uboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="fyw76ccin"/><path class="g6h637vus"/><path class="hsy00uboi"/></g>`,
		"fallback": "icon-park:experiment",
	});
}

export default Component;
