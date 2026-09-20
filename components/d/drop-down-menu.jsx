import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d74elo59o.css';
import '../../css/v/vqv9-lbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d74elo59o"/><path class="vqv9-lbol"/></g>`,
		"fallback": "streamline-sharp:drop-down-menu",
	});
}

export default Component;
