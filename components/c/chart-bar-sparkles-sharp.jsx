import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wuowlcb6f.css';
import '../../css/e/eu7gxlscu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wuowlcb6f"/><path class="eu7gxlscu"/></g>`,
		"fallback": "keyline-icons:chart-bar-sparkles-sharp",
	});
}

export default Component;
