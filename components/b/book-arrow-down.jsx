import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvqlh5vpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvqlh5vpc"/>`,
		"fallback": "mdi:book-arrow-down",
	});
}

export default Component;
