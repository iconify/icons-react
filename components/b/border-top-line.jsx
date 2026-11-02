import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgn7pgbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgn7pgbfe"/>`,
		"fallback": "mingcute:border-top-line",
	});
}

export default Component;
