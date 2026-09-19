import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9o73ac4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9o73ac4k"/>`,
		"fallback": "carbon:airport-location",
	});
}

export default Component;
