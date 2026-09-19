import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y28g32bma.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y28g32bma"/>`,
		"fallback": "fa7-solid:air-freshener",
	});
}

export default Component;
