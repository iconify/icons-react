import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc-5hgb0u.css';
import '../../css/l/lpdbfxb1e.css';
import '../../css/h/hrgcmib9c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qc-5hgb0u"/><path class="lpdbfxb1e"/><path class="hrgcmib9c"/></g>`,
		"fallback": "streamline-color:bandage",
	});
}

export default Component;
