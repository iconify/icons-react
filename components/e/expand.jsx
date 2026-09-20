import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh32lacxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh32lacxo"/>`,
		"fallback": "reicon:expand",
	});
}

export default Component;
