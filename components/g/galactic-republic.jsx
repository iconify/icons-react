import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdq-wdb5q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdq-wdb5q"/>`,
		"fallback": "fa7-brands:galactic-republic",
	});
}

export default Component;
