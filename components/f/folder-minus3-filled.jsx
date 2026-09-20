import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z77c00bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z77c00bxy"/>`,
		"fallback": "reicon:folder-minus3-filled",
	});
}

export default Component;
