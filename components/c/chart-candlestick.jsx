import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/srlp7u7fx.css';
import '../../css/n/njf02vjar.css';
import '../../css/r/r1b7bjmmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjPNMVbfl" x1="9" x2="15" y1="1.52" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGjPNMVbfl)" class="srlp7u7fx"/><path class="njf02vjar wm-a"/><path class="r1b7bjmmm wm-shine"/></g>`,
		"fallback": "withicons-utsav:chart-candlestick",
	});
}

export default Component;
