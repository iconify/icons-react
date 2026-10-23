import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peb1v5bld.css';
import '../../css/l/lspukjbwa.css';
import '../../css/p/p2m0nq5nm.css';
import '../../css/s/su_z13bcb.css';
import '../../css/v/vg7dz0bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="peb1v5bld"/><path class="lspukjbwa"/><path class="p2m0nq5nm"/><path class="su_z13bcb"/><path class="vg7dz0bpl"/></g>`,
		"fallback": "andrsrxn:folder-users",
	});
}

export default Component;
