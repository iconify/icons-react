import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfjb5jbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfjb5jbqj"/>`,
		"fallback": "boxicons:dock-top-right",
	});
}

export default Component;
