import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcske0ocb.css';
import '../../css/b/b2wzjm0mk.css';
import '../../css/x/xmmk2obgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 14 21.3)" class="wcske0ocb"/><rect transform="matrix(1 0 0 -1 2.74 21.3)" class="wcske0ocb"/><rect transform="matrix(1 0 0 -1 14 21.3)" class="b2wzjm0mk"/><rect transform="matrix(1 0 0 -1 2.74 21.3)" class="b2wzjm0mk"/><path class="xmmk2obgh"/></g>`,
		"fallback": "andrsrxn:between-horizontal-left",
	});
}

export default Component;
