import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp-kso11r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp-kso11r"/>`,
		"fallback": "pixelarticons:4g",
	});
}

export default Component;
