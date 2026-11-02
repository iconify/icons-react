import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz2t_87az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz2t_87az"/>`,
		"fallback": "mingcute:currency-baht-line",
	});
}

export default Component;
