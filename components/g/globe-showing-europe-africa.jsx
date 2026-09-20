import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sz-_5oksg.css';
import '../../css/b/b8-s-pb5c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/e/e1-k7lb8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><circle class="sz-_5oksg"/><path class="b8-s-pb5c"/></g><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="e1-k7lb8s"/></g>`,
		"fallback": "openmoji:globe-showing-europe-africa",
	});
}

export default Component;
