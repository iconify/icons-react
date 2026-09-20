import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zck3w-1kz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zck3w-1kz"/>`,
		"fallback": "la:apple-alt",
	});
}

export default Component;
