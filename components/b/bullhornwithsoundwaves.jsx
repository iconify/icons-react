import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kezejccwp.css';
import '../../css/e/e0y0djbux.css';
import '../../css/l/lq9-82byw.css';
import '../../css/a/az7uel8kl.css';
import '../../css/g/gifke4byc.css';
import '../../css/l/ln79h-bxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kezejccwp"/><path class="e0y0djbux"/><path class="lq9-82byw"/><path class="az7uel8kl"/><path class="gifke4byc"/><path class="ln79h-bxu"/>`,
		"fallback": "fxemoji:bullhornwithsoundwaves",
	});
}

export default Component;
