import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9t_4_pig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9t_4_pig"/>`,
		"fallback": "mingcute:currency-pound-2-line",
	});
}

export default Component;
