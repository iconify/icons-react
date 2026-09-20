import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpxoxl2mm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vpxoxl2mm"/>`,
		"fallback": "streamline-flex:broken-link-1-remix",
	});
}

export default Component;
