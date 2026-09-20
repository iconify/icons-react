import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdtr5e43k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdtr5e43k"/>`,
		"fallback": "ooui:bold-geor-man",
	});
}

export default Component;
