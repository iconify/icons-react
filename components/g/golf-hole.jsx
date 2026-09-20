import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1t24mbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1t24mbdf"/>`,
		"fallback": "streamline-ultimate:golf-hole",
	});
}

export default Component;
