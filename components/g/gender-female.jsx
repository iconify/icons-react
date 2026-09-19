import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2s-7hbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2s-7hbwi"/>`,
		"fallback": "griddy-icons:gender-female",
	});
}

export default Component;
