import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9d87e5ls.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9d87e5ls"/>`,
		"fallback": "la:angle-double-left",
	});
}

export default Component;
