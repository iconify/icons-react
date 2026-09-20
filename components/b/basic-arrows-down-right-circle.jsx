import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1t0v7bjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1t0v7bjb"/>`,
		"fallback": "streamline-block:basic-arrows-down-right-circle",
	});
}

export default Component;
