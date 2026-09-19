import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8bm0jxpd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8bm0jxpd"/>`,
		"fallback": "fa7-solid:digital-tachograph",
	});
}

export default Component;
