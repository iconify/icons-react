import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ry_1filvv.css';
import '../../css/w/wixkk1b9o.css';
import '../../css/l/ltx2-3bye.css';
import '../../css/x/xdpngdcke.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ry_1filvv"/><path class="wixkk1b9o"/><path class="ltx2-3bye"/><path class="xdpngdcke"/></g>`,
		"fallback": "streamline-color:button-rewind-2",
	});
}

export default Component;
