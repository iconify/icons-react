import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hrh8j1vxi.css';
import '../../css/v/vhoh30b0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hrh8j1vxi"/><path class="vhoh30b0g"/></g>`,
		"fallback": "streamline:descending-number-order",
	});
}

export default Component;
