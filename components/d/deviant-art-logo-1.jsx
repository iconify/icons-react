import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk8cymtbp.css';
import '../../css/z/zqjy72bhi.css';
import '../../css/n/n1k_d6l3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xk8cymtbp"/><path class="zqjy72bhi"/><path class="n1k_d6l3w"/></g>`,
		"fallback": "streamline-ultimate-color:deviant-art-logo-1",
	});
}

export default Component;
