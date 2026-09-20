import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h26g72gzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h26g72gzh"/>`,
		"fallback": "mingcute:column-fill",
	});
}

export default Component;
