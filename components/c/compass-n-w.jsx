import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi534ubzf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi534ubzf"/>`,
		"fallback": "fluent-mdl2:compass-n-w",
	});
}

export default Component;
