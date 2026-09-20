import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq8hocc1l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq8hocc1l"/>`,
		"fallback": "oi:chat",
	});
}

export default Component;
