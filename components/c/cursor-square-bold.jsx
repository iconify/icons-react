import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj-_6jdwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aj-_6jdwt"/>`,
		"fallback": "solar:cursor-square-bold",
	});
}

export default Component;
