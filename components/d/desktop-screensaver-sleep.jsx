import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sye-tcbbz.css';
import '../../css/g/gwobaib4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sye-tcbbz"/><path class="gwobaib4h"/></g>`,
		"fallback": "streamline-sharp:desktop-screensaver-sleep",
	});
}

export default Component;
