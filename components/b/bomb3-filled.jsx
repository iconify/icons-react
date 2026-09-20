import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrzcqsb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrzcqsb3q"/>`,
		"fallback": "reicon:bomb3-filled",
	});
}

export default Component;
