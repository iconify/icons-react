import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gyr3uh4se.css';
import '../../css/h/hb997obgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="gyr3uh4se"/><path vector-effect="non-scaling-stroke" class="hb997obgc"/></g>`,
		"fallback": "wordpress:gallery",
	});
}

export default Component;
