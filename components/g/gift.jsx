import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u9p68b_jz.css';
import '../../css/l/lphzes20n.css';
import '../../css/b/bgtcaibmd.css';
import '../../css/o/o_msspbwn.css';
import '../../css/o/o-8rotbug.css';
import '../../css/g/g2dczlb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u9p68b_jz wm-shadow"/><path class="lphzes20n wm-shadow"/><path class="bgtcaibmd"/><path class="o_msspbwn"/><path class="o-8rotbug"/><path class="g2dczlb9j"/></g>`,
		"fallback": "withicons-brutal:gift",
	});
}

export default Component;
