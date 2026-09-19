import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f96hxbcul.css';
import '../../css/i/iwshb_4iy.css';
import '../../css/c/c-bap97ue.css';
import '../../css/d/dh5qqbbhm.css';
import '../../css/q/q-9xrx5wt.css';
import '../../css/t/tez_p3b5j.css';
import '../../css/w/wh7_7-j0r.css';
import '../../css/h/hn-3-acqr.css';
import '../../css/b/bsohj8buf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f96hxbcul"/><path class="iwshb_4iy"/><path class="c-bap97ue"/><path class="dh5qqbbhm"/><path class="q-9xrx5wt"/><path class="tez_p3b5j"/><path class="wh7_7-j0r"/><path class="hn-3-acqr"/><path class="bsohj8buf"/></g>`,
		"fallback": "fluent-emoji-flat:carousel-horse",
	});
}

export default Component;
