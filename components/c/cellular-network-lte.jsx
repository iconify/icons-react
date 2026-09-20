import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u86v46blh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u86v46blh"/>`,
		"fallback": "streamline:cellular-network-lte",
	});
}

export default Component;
