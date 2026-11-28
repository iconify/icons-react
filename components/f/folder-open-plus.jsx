import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdwzq7clc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdwzq7clc"/>`,
		"fallback": "noviair-light:folder-open-plus",
	});
}

export default Component;
