import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/i/iyb1cbc4d.css';
import '../../css/f/ffscyns8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="iyb1cbc4d"/><path class="ffscyns8g"/></g>`,
		"fallback": "streamline-plump-color:crop-selection",
	});
}

export default Component;
