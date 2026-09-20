import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/ce6gc0-_s.css';
import '../../css/i/ijsfpibqm.css';
import '../../css/m/m-nuw3bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ce6gc0-_s"/><path class="ijsfpibqm"/><path class="m-nuw3bni"/></g>`,
		"fallback": "streamline-logos:authy-logo",
	});
}

export default Component;
