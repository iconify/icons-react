import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlo2neb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlo2neb4v"/>`,
		"fallback": "mingcute:forward-line",
	});
}

export default Component;
