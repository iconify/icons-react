import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tyyc_hb3b.css';
import '../../css/k/kgb_qyblb.css';
import '../../css/r/r3xj1zbve.css';
import '../../css/w/wphsgxkzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tyyc_hb3b"/><path class="kgb_qyblb"/><circle class="r3xj1zbve"/><path class="wphsgxkzu"/></g>`,
		"fallback": "hugeicons:estimate-02",
	});
}

export default Component;
