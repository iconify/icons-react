import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t9m1ntheo.css';
import '../../css/y/yl4kardsp.css';
import '../../css/o/op8v83bse.css';
import '../../css/d/dsgjiybzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t9m1ntheo"/><path class="wm-a yl4kardsp"/><path class="op8v83bse wm-a"/><path class="dsgjiybzm wm-s"/></g>`,
		"fallback": "withicons:bomb",
	});
}

export default Component;
