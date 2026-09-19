import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9r0jm58k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9r0jm58k"/>`,
		"fallback": "cryptocurrency:bnty",
	});
}

export default Component;
