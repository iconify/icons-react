import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuw2ze76j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuw2ze76j"/>`,
		"fallback": "noviair:coffee-check",
	});
}

export default Component;
