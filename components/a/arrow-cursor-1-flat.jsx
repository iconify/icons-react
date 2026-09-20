import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1om9c1gj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1om9c1gj"/>`,
		"fallback": "streamline-color:arrow-cursor-1-flat",
	});
}

export default Component;
