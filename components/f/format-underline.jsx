import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oakg58hkz.css';
import '../../css/u/ubmhydvvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="oakg58hkz"/><path vector-effect="non-scaling-stroke" class="ubmhydvvx"/></g>`,
		"fallback": "wordpress:format-underline",
	});
}

export default Component;
