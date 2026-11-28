import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbizf5inb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbizf5inb"/>`,
		"fallback": "noviair-light:area-chart-arrow-down",
	});
}

export default Component;
