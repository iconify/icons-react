import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8b_w57wp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8b_w57wp"/>`,
		"fallback": "streamline:cheese-remix",
	});
}

export default Component;
