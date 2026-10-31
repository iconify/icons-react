import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xdgvewb6c.css';
import '../../css/o/oap2wabig.css';
import '../../css/f/fq9dvidjm.css';
import '../../css/w/wz89zl6ee.css';
import '../../css/d/d7q5j8b0v.css';
import '../../css/h/hga29tbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xdgvewb6c"/><path class="oap2wabig wm-shadow"/><path class="fq9dvidjm"/><path class="wz89zl6ee"/><path class="d7q5j8b0v"/><path class="hga29tbyb"/></g>`,
		"fallback": "withicons-brutal:clover",
	});
}

export default Component;
