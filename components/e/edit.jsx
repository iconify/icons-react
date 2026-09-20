import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nitixhb9m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nitixhb9m"/>`,
		"fallback": "la:edit",
	});
}

export default Component;
