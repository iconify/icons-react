import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aza7d0f_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aza7d0f_p"/>`,
		"fallback": "mingcute:bowl-2-line",
	});
}

export default Component;
