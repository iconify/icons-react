import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhgq8jiux.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhgq8jiux"/>`,
		"fallback": "fa7-solid:ear-deaf",
	});
}

export default Component;
