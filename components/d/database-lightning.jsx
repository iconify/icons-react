import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/i/i9pd-kb_l.css';
import '../../css/j/jiu158igz.css';
import '../../css/u/ujn6x3mbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="pd3w4vb1f"/><path class="i9pd-kb_l"/><ellipse class="jiu158igz"/><path class="ujn6x3mbm"/></g>`,
		"fallback": "andrsrxn:database-lightning",
	});
}

export default Component;
