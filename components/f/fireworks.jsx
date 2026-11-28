import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwb0-zpbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwb0-zpbs"/>`,
		"fallback": "noviair-light:fireworks",
	});
}

export default Component;
