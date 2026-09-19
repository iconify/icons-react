import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbqiyh6ai.css';
import '../../css/s/sn37h2nqt.css';
import '../../css/z/zm2n4fowp.css';
import '../../css/b/by4oidcmc.css';
import '../../css/h/h7qghacaq.css';
import '../../css/c/cnhuqhbyr.css';
import '../../css/s/sd6vlkjdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbqiyh6ai"/><path class="sn37h2nqt"/><path class="zm2n4fowp"/><path class="by4oidcmc"/><path class="h7qghacaq"/><path class="cnhuqhbyr"/><path class="sd6vlkjdi"/>`,
		"fallback": "fxemoji:doughnut",
	});
}

export default Component;
