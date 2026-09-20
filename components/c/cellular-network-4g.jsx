import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqs9g2iea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqs9g2iea"/>`,
		"fallback": "streamline-color:cellular-network-4g",
	});
}

export default Component;
