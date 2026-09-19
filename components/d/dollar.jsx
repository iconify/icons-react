import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkkxv_q2b.css';
import '../../css/q/q3d7tt-zk.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/v/v0vxv2kcw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkkxv_q2b"/><path class="q3d7tt-zk"/><path class="d47xi2b9o"/><path class="v0vxv2kcw"/>`,
		"fallback": "formkit:dollar",
	});
}

export default Component;
