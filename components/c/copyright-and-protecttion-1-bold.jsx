import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmdsdab3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmdsdab3x"/>`,
		"fallback": "streamline-ultimate:copyright-and-protecttion-1-bold",
	});
}

export default Component;
