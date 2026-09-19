import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm6_xo21q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm6_xo21q"/>`,
		"fallback": "fluent-mdl2:double-chevron-down-8",
	});
}

export default Component;
