import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u77v6ab5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u77v6ab5m"/>`,
		"fallback": "la:home-solid",
	});
}

export default Component;
