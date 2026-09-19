import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbq_y8bzz.css';
import '../../css/t/t9tbnorgg.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbq_y8bzz"/><path id="SVGxzqvKe5j" class="t9tbnorgg"/><use width="100%" height="100%" href="#SVGxzqvKe5j" transform="matrix(-1 0 0 1 640 0)"/>`,
		"fallback": "flag:al-4x3",
	});
}

export default Component;
