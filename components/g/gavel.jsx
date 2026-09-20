import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f045yabin.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f045yabin"/>`,
		"fallback": "la:gavel",
	});
}

export default Component;
