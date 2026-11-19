import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/k/k_fs4t53y.css';
import '../../css/j/jiu158igz.css';
import '../../css/s/siozdbc_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="pd3w4vb1f"/><path class="k_fs4t53y"/><ellipse class="jiu158igz"/><path class="siozdbc_y"/></g>`,
		"fallback": "andrsrxn:database-fragment",
	});
}

export default Component;
