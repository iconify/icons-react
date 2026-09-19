import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylt9zcbvh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylt9zcbvh"/>`,
		"fallback": "fluent-mdl2:glasses",
	});
}

export default Component;
