import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygpz85bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygpz85bsj"/>`,
		"fallback": "mingcute:git-fork-fill",
	});
}

export default Component;
