import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0m4hyiak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0m4hyiak"/>`,
		"fallback": "streamline-block:entertainment-ticket",
	});
}

export default Component;
