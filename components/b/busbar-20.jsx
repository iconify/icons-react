import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2v9llb1t.css';
import '../../css/w/wgg1ymp4s.css';
import '../../css/b/b-8x7-7tv.css';
import '../../css/q/qv6g5_dvg.css';
import '../../css/x/x1u2ck8ff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2v9llb1t"/><path class="wgg1ymp4s"/><path class="b-8x7-7tv"/><path class="qv6g5_dvg"/><path class="x1u2ck8ff"/>`,
		"fallback": "energy-icons:busbar-20",
	});
}

export default Component;
