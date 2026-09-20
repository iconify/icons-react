import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsrittilq.css';
import '../../css/v/v8r_7ux_a.css';
import '../../css/g/ge_y5myfg.css';
import '../../css/z/zva0mvbcc.css';
import '../../css/s/s4ass9hji.css';
import '../../css/u/ucjolkbum.css';
import '../../css/o/oe8h8vbwc.css';
import '../../css/k/k_ab9_bzx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsrittilq"/><path class="v8r_7ux_a"/><path class="ge_y5myfg"/><path class="zva0mvbcc"/><path class="s4ass9hji"/><path class="ucjolkbum"/><path class="oe8h8vbwc"/><path class="k_ab9_bzx"/>`,
		"fallback": "openmoji:face-in-clouds",
	});
}

export default Component;
