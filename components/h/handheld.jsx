import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q7nwfvbkq.css';
import '../../css/u/uw08wtbph.css';
import '../../css/g/geuvczi2n.css';
import '../../css/k/kprf1gbof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q7nwfvbkq"/><path class="uw08wtbph"/><path class="geuvczi2n"/><path class="kprf1gbof"/></g>`,
		"fallback": "icon-park-solid:handheld",
	});
}

export default Component;
