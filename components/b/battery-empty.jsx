import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgukkub9j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgukkub9j"/>`,
		"fallback": "oi:battery-empty",
	});
}

export default Component;
