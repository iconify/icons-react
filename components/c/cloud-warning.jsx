import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orupi1b7t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orupi1b7t"/>`,
		"fallback": "streamline-flex:cloud-warning",
	});
}

export default Component;
