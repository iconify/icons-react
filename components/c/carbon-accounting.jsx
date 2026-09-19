import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uih3f9bgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uih3f9bgb"/>`,
		"fallback": "carbon:carbon-accounting",
	});
}

export default Component;
