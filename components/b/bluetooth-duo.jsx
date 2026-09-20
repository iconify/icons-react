import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/w/wl8o0dkgp.css';
import '../../css/f/fvd8e8bcz.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="wl8o0dkgp"/><path class="fvd8e8bcz"/></g>`,
		"fallback": "streamline-stickies-color:bluetooth-duo",
	});
}

export default Component;
