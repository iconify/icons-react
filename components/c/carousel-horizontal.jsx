import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf6_e5b9b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf6_e5b9b"/>`,
		"fallback": "carbon:carousel-horizontal",
	});
}

export default Component;
