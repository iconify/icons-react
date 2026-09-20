import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrlf1oakz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrlf1oakz"/>`,
		"fallback": "la:infinity-solid",
	});
}

export default Component;
