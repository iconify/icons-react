import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5uxynb9j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5uxynb9j"/>`,
		"fallback": "streamline-flex:balloon-solid",
	});
}

export default Component;
