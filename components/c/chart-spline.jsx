import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlcze4bks.css';
import '../../css/b/b7uff_b0q.css';
import '../../css/k/kp3sj8oie.css';
import '../../css/u/ucbigz26e.css';
import '../../css/p/p6ov47tfz.css';
import '../../css/r/r1mzhcb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xlcze4bks"/><path class="b7uff_b0q wm-k"/><path class="kp3sj8oie wm-k"/><path class="ucbigz26e wm-a"/><path class="p6ov47tfz wm-a"/><path class="r1mzhcb0d wm-a"/></g>`,
		"fallback": "withicons-anime:chart-spline",
	});
}

export default Component;
