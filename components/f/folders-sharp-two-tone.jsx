import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wumzwvbxe.css';
import '../../css/p/p5m34fvfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wumzwvbxe"/><path class="p5m34fvfk"/></g>`,
		"fallback": "keyline-icons:folders-sharp-two-tone",
	});
}

export default Component;
