import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0_loy4wi.css';
import '../../css/z/zzxor3b5a.css';
import '../../css/l/l-d_xdbdd.css';
import '../../css/t/t-k4tpb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0_loy4wi"/><path class="zzxor3b5a"/><path class="l-d_xdbdd"/><path class="t-k4tpb0z"/>`,
		"fallback": "fxemoji:elephant",
	});
}

export default Component;
