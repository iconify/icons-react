import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t6a7bkb4b.css';
import '../../css/t/t4n5mvw8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t6a7bkb4b"/><path vector-effect="non-scaling-stroke" class="t4n5mvw8m"/></g>`,
		"fallback": "wordpress:audio",
	});
}

export default Component;
