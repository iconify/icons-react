import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rh1j5ccfn.css';
import '../../css/s/sz74zmb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="rh1j5ccfn"/><path vector-effect="non-scaling-stroke" class="sz74zmb6b"/></g>`,
		"fallback": "wordpress:capture-photo",
	});
}

export default Component;
