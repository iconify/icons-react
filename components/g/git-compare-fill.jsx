import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdjb4f5fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdjb4f5fe"/>`,
		"fallback": "mingcute:git-compare-fill",
	});
}

export default Component;
