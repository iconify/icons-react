import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3q5dgd3j.css';
import '../../css/z/z5isr3bvu.css';
import '../../css/c/ce7yr5b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="m3q5dgd3j"/><path vector-effect="non-scaling-stroke" class="z5isr3bvu"/><path vector-effect="non-scaling-stroke" class="ce7yr5b1g"/></g>`,
		"fallback": "wordpress:format-list-numbered-rtl",
	});
}

export default Component;
