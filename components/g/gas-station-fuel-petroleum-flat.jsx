import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f--ss6bbr.css';
import '../../css/f/fyis-ma8b.css';
import '../../css/h/hd22bqb_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f--ss6bbr"/><path class="fyis-ma8b"/><path clip-rule="evenodd" class="hd22bqb_b"/></g>`,
		"fallback": "streamline-color:gas-station-fuel-petroleum-flat",
	});
}

export default Component;
