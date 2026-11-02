import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqno33bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqno33bvj"/>`,
		"fallback": "mingcute:fork-fill",
	});
}

export default Component;
