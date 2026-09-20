import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-6_194sg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-6_194sg"/>`,
		"fallback": "pinhead:angelfish-under-water",
	});
}

export default Component;
