import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8b1owz0y.css';
import '../../css/c/cpfb2_bfw.css';
import '../../css/c/cxbhvgb4x.css';
import '../../css/z/zzr8snbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8b1owz0y"/><path class="cpfb2_bfw"/><path class="cxbhvgb4x"/><path class="zzr8snbyp"/></g>`,
		"fallback": "streamline-cyber-color:account-group",
	});
}

export default Component;
