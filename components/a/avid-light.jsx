import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4vpy9bhf.css';

const viewBox = {"width":193.2,"height":58.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4vpy9bhf"/>`,
		"fallback": "thesvg-color:avid-light",
	});
}

export default Component;
