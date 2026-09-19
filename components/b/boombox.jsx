import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oztf66rsb.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oztf66rsb"/>`,
		"fallback": "whh:boombox",
	});
}

export default Component;
