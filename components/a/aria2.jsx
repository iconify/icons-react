import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2b0idb-p.css';
import '../../css/n/ne7tbtpgb.css';
import '../../css/b/b8rop1bve.css';
import '../../css/w/w2i6bmbxg.css';
import '../../css/w/w28kcnbfh.css';
import '../../css/t/t1hdl8o-y.css';
import '../../css/o/osi2yu8vz.css';
import '../../css/g/gnbtt107x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2b0idb-p"/><linearGradient id="SVG0mf17cKS" x1="256" x2="256" y1="478.968" y2="33.032" gradientUnits="userSpaceOnUse"><stop offset="0" class="ne7tbtpgb"/><stop offset=".93" class="b8rop1bve"/><stop offset="1" class="w2i6bmbxg"/></linearGradient><path fill="url(#SVG0mf17cKS)" class="w28kcnbfh"/><linearGradient id="SVGi5diwbVw" x1="255.946" x2="255.946" y1="408.172" y2="104.516" gradientUnits="userSpaceOnUse"><stop offset="0" class="t1hdl8o-y"/><stop offset="1" class="osi2yu8vz"/></linearGradient><path fill="url(#SVGi5diwbVw)" class="gnbtt107x"/>`,
		"fallback": "selfhst:aria2",
	});
}

export default Component;
