import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-mv4k2jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-mv4k2jr"/>`,
		"fallback": "mingcute:champagne-fill",
	});
}

export default Component;
