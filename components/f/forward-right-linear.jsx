import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of77a-g0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of77a-g0k"/>`,
		"fallback": "solar:forward-right-linear",
	});
}

export default Component;
