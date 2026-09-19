import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6dxwsbql.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6dxwsbql"/>`,
		"fallback": "fa-solid:infinity",
	});
}

export default Component;
