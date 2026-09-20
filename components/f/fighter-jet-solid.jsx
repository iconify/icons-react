import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwbfe-b7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwbfe-b7k"/>`,
		"fallback": "la:fighter-jet-solid",
	});
}

export default Component;
