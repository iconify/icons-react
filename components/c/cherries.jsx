import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mal0l8dqu.css';
import '../../css/l/lzsdcc_sv.css';
import '../../css/a/a2xs57mgr.css';
import '../../css/w/wbhoebb4k.css';
import '../../css/d/d_n4-kf0s.css';
import '../../css/k/k9i74kcvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mal0l8dqu"/><circle class="lzsdcc_sv"/><path class="a2xs57mgr"/><path class="wbhoebb4k"/><circle class="d_n4-kf0s"/><path class="k9i74kcvf"/>`,
		"fallback": "fxemoji:cherries",
	});
}

export default Component;
