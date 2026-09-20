import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pt8p-7asf.css';
import '../../css/x/xe207tbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pt8p-7asf"/><path class="xe207tbqp"/></g>`,
		"fallback": "keyline-icons:chart-network-sharp-fill",
	});
}

export default Component;
