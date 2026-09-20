import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np807yrki.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np807yrki"/>`,
		"fallback": "memory:box-light-vertical-left-stipple-down-left",
	});
}

export default Component;
