import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs5lclkzn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs5lclkzn"/>`,
		"fallback": "carbon:deployment-unit-data",
	});
}

export default Component;
