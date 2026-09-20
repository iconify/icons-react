import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1adf7z0r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1adf7z0r"/>`,
		"fallback": "thesvg:dataspell",
	});
}

export default Component;
