import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvhch1-4t.css';
import '../../css/o/oirzc_rey.css';
import '../../css/y/y3t9q1bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvhch1-4t"/><path class="oirzc_rey"/><path class="y3t9q1bdx"/>`,
		"fallback": "boxicons:credit-card",
	});
}

export default Component;
