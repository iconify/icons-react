import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr9_-zvzb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wr9_-zvzb"/>`,
		"fallback": "streamline-color:fingerprint-1-flat",
	});
}

export default Component;
