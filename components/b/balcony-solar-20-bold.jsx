import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb962gbar.css';
import '../../css/u/ukm6slb5o.css';
import '../../css/j/j15ob97qd.css';
import '../../css/g/g6t4fyb_i.css';
import '../../css/x/xnd446bty.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb962gbar"/><path class="ukm6slb5o"/><path class="j15ob97qd"/><path class="g6t4fyb_i"/><path class="xnd446bty"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:balcony-solar-20-bold",
	});
}

export default Component;
