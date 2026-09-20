import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/q/qne1fi5mm.css';
import '../../css/m/m8n5clbmc.css';
import '../../css/z/z5z2sd3ck.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="qne1fi5mm"/><path class="m8n5clbmc"/><path class="z5z2sd3ck"/></g>`,
		"fallback": "streamline-stickies-color:candy-cane",
	});
}

export default Component;
