import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8d3i3bwn.css';
import '../../css/z/znt9vihet.css';
import '../../css/p/p2m0nq5nm.css';
import '../../css/s/su_z13bcb.css';
import '../../css/k/kqd330_hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8d3i3bwn"/><path class="znt9vihet"/><path class="p2m0nq5nm"/><path class="su_z13bcb"/><path class="kqd330_hy"/></g>`,
		"fallback": "andrsrxn:folder-users",
	});
}

export default Component;
