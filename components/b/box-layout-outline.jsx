import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phxg1om_y.css';
import '../../css/b/b136qyb_h.css';
import '../../css/f/fvmj7xjzs.css';
import '../../css/f/fhj6hwjlb.css';
import '../../css/h/hk00seb_m.css';
import '../../css/b/b7oninbyt.css';
import '../../css/a/at7b49w0y.css';
import '../../css/l/luw467qkp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phxg1om_y"/><path clip-rule="evenodd" class="b136qyb_h"/><path class="fvmj7xjzs"/><path clip-rule="evenodd" class="fhj6hwjlb"/><path class="hk00seb_m"/><path clip-rule="evenodd" class="b7oninbyt"/><path class="at7b49w0y"/><path clip-rule="evenodd" class="luw467qkp"/></g>`,
		"fallback": "glyphs:box-layout-outline",
	});
}

export default Component;
