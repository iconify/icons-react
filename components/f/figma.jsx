import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc-q1h0-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc-q1h0-v"/>`,
		"fallback": "bxl:figma",
	});
}

export default Component;
