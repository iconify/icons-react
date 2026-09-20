import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1sdb3fh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he1sdb3fh"/>`,
		"fallback": "la:bus-alt-solid",
	});
}

export default Component;
