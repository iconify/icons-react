import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x01th1b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x01th1b2x"/>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-end",
	});
}

export default Component;
