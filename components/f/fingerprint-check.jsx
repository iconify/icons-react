import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icy7k2bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icy7k2bsl"/>`,
		"fallback": "noviair-light:fingerprint-check",
	});
}

export default Component;
