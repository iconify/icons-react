import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uan6h8bhc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uan6h8bhc"/>`,
		"fallback": "fluent-mdl2:branch-fork",
	});
}

export default Component;
