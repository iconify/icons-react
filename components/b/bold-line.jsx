import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0t1tcc3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0t1tcc3o"/>`,
		"fallback": "mingcute:bold-line",
	});
}

export default Component;
