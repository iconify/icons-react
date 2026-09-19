import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv11-qf5k.css';

const viewBox = {"width":1152,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv11-qf5k"/>`,
		"fallback": "vs:elderly",
	});
}

export default Component;
