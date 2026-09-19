import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq2ekwa6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq2ekwa6h"/>`,
		"fallback": "game-icons:gamepad",
	});
}

export default Component;
