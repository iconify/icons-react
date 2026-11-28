import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m5mho-e0x.css';
import '../../css/c/cbvzglb0e.css';
import '../../css/f/fbv-j30nd.css';
import '../../css/f/fjk8iknrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m5mho-e0x"/><path class="cbvzglb0e"/><path class="fbv-j30nd"/><path class="fjk8iknrg"/></g>`,
		"fallback": "iconaut:cup-soda",
	});
}

export default Component;
