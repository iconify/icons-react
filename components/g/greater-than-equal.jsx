import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6ax7bc4w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6ax7bc4w"/>`,
		"fallback": "fa6-solid:greater-than-equal",
	});
}

export default Component;
