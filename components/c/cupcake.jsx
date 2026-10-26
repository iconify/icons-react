import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q_93qobtu.css';
import '../../css/o/ogogkhbdn.css';
import '../../css/e/e425vyb8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="q_93qobtu"/><path class="ogogkhbdn"/><path class="e425vyb8k"/></g>`,
		"fallback": "doodle-icons:cupcake",
	});
}

export default Component;
