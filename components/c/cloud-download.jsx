import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuf0xhbhd.css';
import '../../css/x/x79dud18i.css';
import '../../css/m/mpqjshbww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuf0xhbhd"/><path class="x79dud18i"/><path class="mpqjshbww"/></g>`,
		"fallback": "streamline-flex-color:cloud-download",
	});
}

export default Component;
