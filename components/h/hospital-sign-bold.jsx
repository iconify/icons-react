import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhp55-bbc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nhp55-bbc"/>`,
		"fallback": "glyphs:hospital-sign-bold",
	});
}

export default Component;
