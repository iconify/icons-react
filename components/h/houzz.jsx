import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy8javlss.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy8javlss"/>`,
		"fallback": "fa:houzz",
	});
}

export default Component;
