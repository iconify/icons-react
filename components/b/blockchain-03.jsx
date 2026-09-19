import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/biv6ap7mx.css';
import '../../css/q/qrd0hs9_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="biv6ap7mx"/><path class="qrd0hs9_l"/></g>`,
		"fallback": "hugeicons:blockchain-03",
	});
}

export default Component;
