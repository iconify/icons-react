import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkhbm6bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkhbm6bwu"/>`,
		"fallback": "mingcute:arrow-left-up-line",
	});
}

export default Component;
