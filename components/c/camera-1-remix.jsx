import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly5hmxbrd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly5hmxbrd"/>`,
		"fallback": "streamline-flex:camera-1-remix",
	});
}

export default Component;
