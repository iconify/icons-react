import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivq7ni1-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivq7ni1-w"/>`,
		"fallback": "mingcute:corner-left-down-line",
	});
}

export default Component;
