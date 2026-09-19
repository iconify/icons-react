import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_mhv-rsu.css';
import '../../css/d/d_it9lbee.css';
import '../../css/z/zj0u1bcaj.css';
import '../../css/b/bwc2bbi1v.css';
import '../../css/s/si1lanbzm.css';
import '../../css/b/b622qub7n.css';
import '../../css/u/uqdlygb6q.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_mhv-rsu"/><path class="d_it9lbee"/><path class="zj0u1bcaj"/><path class="bwc2bbi1v"/><path class="si1lanbzm"/><path class="b622qub7n"/><path class="uqdlygb6q"/>`,
		"fallback": "devicon:gcc",
	});
}

export default Component;
