import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq62kmbce.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq62kmbce"/>`,
		"fallback": "fluent-mdl2:blocked",
	});
}

export default Component;
