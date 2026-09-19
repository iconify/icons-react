import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_gxueo7c.css';
import '../../css/p/p6eql6bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_gxueo7c st0"/><path class="p6eql6bly st0"/>`,
		"fallback": "boxicons:hinduism",
	});
}

export default Component;
