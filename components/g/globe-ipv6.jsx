import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4jy-5b2t.css';
import '../../css/n/nv93gbbuw.css';
import '../../css/f/fbcgu3o_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x4jy-5b2t"/><path class="nv93gbbuw"/><path class="fbcgu3o_z"/></g>`,
		"fallback": "andrsrxn:globe-ipv6",
	});
}

export default Component;
