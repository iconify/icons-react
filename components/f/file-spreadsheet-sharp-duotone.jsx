import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vpyvtnijy.css';
import '../../css/g/g6hnddcux.css';
import '../../css/f/f35a0nb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vpyvtnijy"/><path clip-rule="evenodd" class="g6hnddcux"/><path class="f35a0nb3y"/></g>`,
		"fallback": "keyline-icons:file-spreadsheet-sharp-duotone",
	});
}

export default Component;
