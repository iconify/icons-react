import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnxnfo91g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnxnfo91g"/>`,
		"fallback": "ri:crop-line",
	});
}

export default Component;
