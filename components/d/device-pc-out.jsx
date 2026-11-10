import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l082cbbuf.css';
import '../../css/p/pjpf1q9ly.css';
import '../../css/d/drd5f988c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l082cbbuf"/><path class="pjpf1q9ly"/><path class="drd5f988c"/></g>`,
		"fallback": "andrsrxn:device-pc-out",
	});
}

export default Component;
