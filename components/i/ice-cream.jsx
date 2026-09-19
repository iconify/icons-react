import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p26oc5e-b.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p26oc5e-b"/>`,
		"fallback": "fa-solid:ice-cream",
	});
}

export default Component;
