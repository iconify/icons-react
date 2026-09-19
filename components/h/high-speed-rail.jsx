import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w9z9w7vpq.css';
import '../../css/k/kgom2wzjp.css';
import '../../css/k/kq30l5gks.css';
import '../../css/x/xk412fbxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="w9z9w7vpq"/><path class="kgom2wzjp"/><path class="kq30l5gks"/><path class="xk412fbxm"/></g>`,
		"fallback": "icon-park-outline:high-speed-rail",
	});
}

export default Component;
