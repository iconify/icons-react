import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv_0-d7tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv_0-d7tj"/>`,
		"fallback": "mingcute:boom-line",
	});
}

export default Component;
