import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbr8r1bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbr8r1bmh"/>`,
		"fallback": "ri:expand-horizontal-line",
	});
}

export default Component;
