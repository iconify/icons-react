import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njln5bqfa.css';
import '../../css/n/nz8z22a0r.css';
import '../../css/g/gyd0xoo2j.css';
import '../../css/b/bx_297bpr.css';
import '../../css/o/oj0g6u2xa.css';
import '../../css/z/znrwh0g2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njln5bqfa"/><path class="nz8z22a0r"/><path class="gyd0xoo2j"/><path class="bx_297bpr"/><path class="oj0g6u2xa"/><path class="znrwh0g2q"/></g>`,
		"fallback": "streamline-ultimate-color:content-pen-write-2",
	});
}

export default Component;
