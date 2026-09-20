import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c83vp7b4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c83vp7b4u"/>`,
		"fallback": "streamline-color:christian-cross-1-flat",
	});
}

export default Component;
