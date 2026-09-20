import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9iyotb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9iyotb1w"/>`,
		"fallback": "keyline-icons:bar-chart-2-down",
	});
}

export default Component;
