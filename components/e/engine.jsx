import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb31qukaz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb31qukaz"/>`,
		"fallback": "picon:engine",
	});
}

export default Component;
