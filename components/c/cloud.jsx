import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpiu6lnbs.css';

const viewBox = {"width":730,"height":710};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpiu6lnbs"/>`,
		"fallback": "il:cloud",
	});
}

export default Component;
