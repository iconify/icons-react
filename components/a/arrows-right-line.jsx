import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aig8m2tbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aig8m2tbv"/>`,
		"fallback": "mingcute:arrows-right-line",
	});
}

export default Component;
