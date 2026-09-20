import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5mejsbpb.css';
import '../../css/r/r5o1yj3oq.css';
import '../../css/o/o8snvbc3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5mejsbpb"/><path class="r5o1yj3oq"/><path class="o8snvbc3i"/></g>`,
		"fallback": "reicon:cart-shopping",
	});
}

export default Component;
