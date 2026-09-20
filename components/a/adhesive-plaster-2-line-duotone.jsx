import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wzac4bb4n.css';
import '../../css/t/tc5bwr4yg.css';
import '../../css/s/swsqpom4y.css';
import '../../css/p/phctv_brq.css';
import '../../css/l/lii0jv5qd.css';
import '../../css/z/zobqt3-km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wzac4bb4n"/><path class="tc5bwr4yg"/><path class="swsqpom4y"/><path class="phctv_brq"/><path class="lii0jv5qd"/><path class="zobqt3-km"/></g>`,
		"fallback": "solar:adhesive-plaster-2-line-duotone",
	});
}

export default Component;
