import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agz0m6b8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agz0m6b8d"/>`,
		"fallback": "la:bath-solid",
	});
}

export default Component;
