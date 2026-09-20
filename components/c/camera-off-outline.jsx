import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx0uqebjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx0uqebjw"/>`,
		"fallback": "mdi:camera-off-outline",
	});
}

export default Component;
