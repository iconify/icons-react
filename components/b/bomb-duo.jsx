import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tr93hqv3k.css';
import '../../css/m/mydt5mb6c.css';
import '../../css/d/dz7rqk2qw.css';
import '../../css/d/dsgjiybzm.css';
import '../../css/t/t9m1ntheo.css';
import '../../css/y/yl4kardsp.css';
import '../../css/o/op8v83bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tr93hqv3k"/><path class="mydt5mb6c wm-a"/><path class="dz7rqk2qw wm-s"/><path class="dsgjiybzm wm-s"/><path class="t9m1ntheo"/><path class="wm-a yl4kardsp"/><path class="op8v83bse wm-a"/></g>`,
		"fallback": "withicons:bomb-duo",
	});
}

export default Component;
