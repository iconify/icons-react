import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8dsq4bdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8dsq4bdr"/>`,
		"fallback": "ix:faceplate-container",
	});
}

export default Component;
