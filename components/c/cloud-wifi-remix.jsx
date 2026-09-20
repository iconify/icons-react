import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym4bu1bnb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym4bu1bnb"/>`,
		"fallback": "streamline:cloud-wifi-remix",
	});
}

export default Component;
