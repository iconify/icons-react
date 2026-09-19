import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gky7xcbgs.css';
import '../../css/d/d26v317vg.css';
import '../../css/r/rz833ubgc.css';
import '../../css/f/fg974bc0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gky7xcbgs"/><g class="d26v317vg"><path class="rz833ubgc"/><path class="fg974bc0y"/></g></g>`,
		"fallback": "cryptocurrency-color:ins",
	});
}

export default Component;
