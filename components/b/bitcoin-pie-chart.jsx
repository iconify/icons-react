import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vyzc02u8i.css';
import '../../css/b/b7ymabc5l.css';
import '../../css/d/djl8yp5xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vyzc02u8i"/><path class="b7ymabc5l"/><path class="djl8yp5xq"/></g>`,
		"fallback": "hugeicons:bitcoin-pie-chart",
	});
}

export default Component;
