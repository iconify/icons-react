import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp600_i4z.css';
import '../../css/o/osemxebgc.css';
import '../../css/j/jy0yf6bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp600_i4z"/><path clip-rule="evenodd" class="osemxebgc"/><path class="jy0yf6bpc"/>`,
		"fallback": "solar:battery-charge-minimalistic-outline",
	});
}

export default Component;
