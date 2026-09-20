import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mpvhkmbgv.css';
import '../../css/i/igszbab5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mpvhkmbgv"/><path class="igszbab5w"/></g>`,
		"fallback": "streamline-sharp:chair-2",
	});
}

export default Component;
