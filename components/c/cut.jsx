import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7n0xbc9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7n0xbc9y"/>`,
		"fallback": "uiw:cut",
	});
}

export default Component;
