import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g730-hann.css';
import '../../css/i/imtigfbsi.css';
import '../../css/y/yie5yccdo.css';
import '../../css/b/ber42vkvg.css';
import '../../css/g/g7uezpbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g730-hann wm-shadow"/><path class="imtigfbsi"/><path class="yie5yccdo"/><path class="ber42vkvg"/><path class="g7uezpbub"/></g>`,
		"fallback": "withicons-retro:balloon",
	});
}

export default Component;
