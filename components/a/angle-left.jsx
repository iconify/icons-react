import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvimrhqnd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvimrhqnd"/>`,
		"fallback": "la:angle-left",
	});
}

export default Component;
