import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irbh--b0q.css';

const viewBox = {"width":1280,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irbh--b0q"/>`,
		"fallback": "fa:angellist",
	});
}

export default Component;
