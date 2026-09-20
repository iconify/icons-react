import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrr3flboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrr3flboy"/>`,
		"fallback": "reicon:arrow-right5",
	});
}

export default Component;
