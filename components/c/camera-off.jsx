import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwg23r9ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwg23r9ev"/>`,
		"fallback": "noviair-light:camera-off",
	});
}

export default Component;
