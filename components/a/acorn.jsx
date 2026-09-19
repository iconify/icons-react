import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw52o564d.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw52o564d"/>`,
		"fallback": "whh:acorn",
	});
}

export default Component;
