import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucde5db9d.css';
import '../../css/o/oeiijo52p.css';
import '../../css/r/ry13hccoi.css';
import '../../css/m/mdcko5bzp.css';
import '../../css/m/mildjrb6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucde5db9d"/><path class="oeiijo52p"/><path class="ry13hccoi"/><path class="mdcko5bzp"/><path class="mildjrb6w"/></g>`,
		"fallback": "streamline-flex-color:desktop-screensaver-sleep",
	});
}

export default Component;
