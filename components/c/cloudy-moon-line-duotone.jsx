import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mvo7t3bjg.css';
import '../../css/b/b7ovmpuch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mvo7t3bjg"/><path class="b7ovmpuch"/></g>`,
		"fallback": "solar:cloudy-moon-line-duotone",
	});
}

export default Component;
