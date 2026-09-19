import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivqa_53qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivqa_53qu"/>`,
		"fallback": "iconoir:add-selection",
	});
}

export default Component;
