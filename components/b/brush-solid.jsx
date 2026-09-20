import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i82r32b3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i82r32b3v"/>`,
		"fallback": "la:brush-solid",
	});
}

export default Component;
