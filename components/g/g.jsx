import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kph4srbdu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kph4srbdu"/>`,
		"fallback": "fa6-solid:g",
	});
}

export default Component;
