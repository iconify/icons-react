import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7y5bo06z.css';
import '../../css/p/pi0-99nxr.css';
import '../../css/b/bf-gxhb-l.css';
import '../../css/w/wdf3xp0sq.css';
import '../../css/w/wmsdu-pjw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p7y5bo06z"/><path class="pi0-99nxr"/><path class="bf-gxhb-l"/><path class="wdf3xp0sq"/><path class="wmsdu-pjw"/></g>`,
		"fallback": "streamline-flex-color:erlenmeyer-flask",
	});
}

export default Component;
