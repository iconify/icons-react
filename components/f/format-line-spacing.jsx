import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irq17xbtt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irq17xbtt"/>`,
		"fallback": "memory:format-line-spacing",
	});
}

export default Component;
