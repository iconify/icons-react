import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khjcesbpn.css';
import '../../css/s/s-u82krba.css';
import '../../css/k/k00q12jpk.css';
import '../../css/h/hzo9elbjr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khjcesbpn"/><path class="s-u82krba"/><path class="k00q12jpk"/><path class="hzo9elbjr"/></g>`,
		"fallback": "streamline-color:gold",
	});
}

export default Component;
