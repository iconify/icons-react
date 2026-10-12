import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scsebab7g.css';
import '../../css/y/ympuekv6p.css';
import '../../css/v/v0irmxb4m.css';
import '../../css/b/b09e7qg2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="scsebab7g"/><path class="ympuekv6p"/><path class="v0irmxb4m"/><path class="b09e7qg2x"/></g>`,
		"fallback": "andrsrxn:hand-high-five",
	});
}

export default Component;
