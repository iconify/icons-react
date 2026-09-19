import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1bvobxmo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1bvobxmo"/>`,
		"fallback": "icons8:hdd",
	});
}

export default Component;
