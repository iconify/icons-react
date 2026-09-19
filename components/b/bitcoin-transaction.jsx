import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/drxknmbwm.css';
import '../../css/n/ny5thtblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="drxknmbwm"/><path class="ny5thtblp"/></g>`,
		"fallback": "hugeicons:bitcoin-transaction",
	});
}

export default Component;
