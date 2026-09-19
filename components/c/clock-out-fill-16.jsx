import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysul9tm-d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysul9tm-d"/>`,
		"fallback": "garden:clock-out-fill-16",
	});
}

export default Component;
