import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxe0vybfv.css';
import '../../css/c/c6l5vwb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxe0vybfv"/><path class="c6l5vwb1d"/>`,
		"fallback": "streamline-ultimate:business-card-hand-2-bold",
	});
}

export default Component;
