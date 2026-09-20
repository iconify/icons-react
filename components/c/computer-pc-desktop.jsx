import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmy6ppbub.css';
import '../../css/k/k-xbkynct.css';
import '../../css/x/x2-ltettm.css';
import '../../css/w/wjoocfixt.css';
import '../../css/i/i1rj8ub5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmy6ppbub"/><path class="k-xbkynct"/><path class="x2-ltettm"/><path class="wjoocfixt"/><path class="i1rj8ub5j"/></g>`,
		"fallback": "streamline-color:computer-pc-desktop",
	});
}

export default Component;
