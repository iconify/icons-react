import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocltiu-dk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocltiu-dk"/>`,
		"fallback": "streamline:cellular-network-4g",
	});
}

export default Component;
