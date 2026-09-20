import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cckv02b_r.css';
import '../../css/b/b3qoqhb-f.css';
import '../../css/m/mrsezmbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cckv02b_r"/><path class="b3qoqhb-f"/><path class="mrsezmbfp"/></g>`,
		"fallback": "streamline-freehand:discount-50-percent",
	});
}

export default Component;
