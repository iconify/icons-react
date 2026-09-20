import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n-it7vbbk.css';
import '../../css/y/yjcp3vb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n-it7vbbk"/><path class="yjcp3vb0y"/></g>`,
		"fallback": "keyline-icons:camera-off-sharp-two-tone",
	});
}

export default Component;
