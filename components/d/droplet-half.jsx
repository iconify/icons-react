import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q91u8jbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q91u8jbaq"/>`,
		"fallback": "iconoir:droplet-half",
	});
}

export default Component;
