import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzhxywx4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzhxywx4y"/>`,
		"fallback": "streamline-freehand:flip-reflect-up",
	});
}

export default Component;
