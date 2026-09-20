import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy61_00yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy61_00yi"/>`,
		"fallback": "mingcute:candy-2-line",
	});
}

export default Component;
