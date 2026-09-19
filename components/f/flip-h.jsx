import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izlo61v6q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izlo61v6q"/>`,
		"fallback": "gis:flip-h",
	});
}

export default Component;
