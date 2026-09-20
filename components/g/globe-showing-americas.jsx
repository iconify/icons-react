import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sz-_5oksg.css';
import '../../css/v/vv6n5srqa.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/z/z-z_l7bta.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><circle class="sz-_5oksg"/><path class="vv6n5srqa"/></g><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="z-z_l7bta"/></g>`,
		"fallback": "openmoji:globe-showing-americas",
	});
}

export default Component;
