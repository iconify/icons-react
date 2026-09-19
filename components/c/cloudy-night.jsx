import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kru6wy-1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kru6wy-1k"/>`,
		"fallback": "griddy-icons:cloudy-night",
	});
}

export default Component;
