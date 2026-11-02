import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of3fd8b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of3fd8b6d"/>`,
		"fallback": "mingcute:align-arrow-up-fill",
	});
}

export default Component;
