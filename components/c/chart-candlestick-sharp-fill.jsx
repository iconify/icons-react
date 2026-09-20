import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/esjml2b0p.css';
import '../../css/q/qe_oe2wyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="esjml2b0p"/><path class="qe_oe2wyo"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-sharp-fill",
	});
}

export default Component;
