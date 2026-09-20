import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjb4sd8ra.css';
import '../../css/r/rcvcc1uju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjb4sd8ra"/><path class="rcvcc1uju"/></g>`,
		"fallback": "streamline-sharp:gas-station-fuel-petroleum",
	});
}

export default Component;
