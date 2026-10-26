import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uu_2899wi.css';
import '../../css/p/p-uk8gv3a.css';
import '../../css/c/ccqewbl1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uu_2899wi"/><path class="p-uk8gv3a"/><path class="ccqewbl1g"/></g>`,
		"fallback": "doodle-icons:birthday-candle",
	});
}

export default Component;
