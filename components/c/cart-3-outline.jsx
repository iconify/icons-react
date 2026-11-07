import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl1dehbpf.css';
import '../../css/y/ytsg6bbox.css';
import '../../css/o/ou67k_boh.css';
import '../../css/s/shyqp7s2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl1dehbpf"/><path class="ytsg6bbox"/><path class="ou67k_boh"/><path clip-rule="evenodd" class="shyqp7s2k"/>`,
		"fallback": "solar:cart-3-outline",
	});
}

export default Component;
