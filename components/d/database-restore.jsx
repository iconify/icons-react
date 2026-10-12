import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/f/fberbib5e.css';
import '../../css/j/jiu158igz.css';
import '../../css/e/efc1by8br.css';
import '../../css/d/dy0x03tdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(-180 12 5.23)" class="pd3w4vb1f"/><path class="fberbib5e"/><ellipse transform="rotate(-180 12 5.23)" class="jiu158igz"/><path class="efc1by8br"/><path class="dy0x03tdk"/></g>`,
		"fallback": "andrsrxn:database-restore",
	});
}

export default Component;
