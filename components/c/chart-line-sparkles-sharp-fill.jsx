import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nun3gxbhe.css';
import '../../css/w/wbvbd6aut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nun3gxbhe"/><path class="wbvbd6aut"/></g>`,
		"fallback": "keyline-icons:chart-line-sparkles-sharp-fill",
	});
}

export default Component;
