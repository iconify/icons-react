import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/ngeexsbgt.css';
import '../../css/p/pr5m-s0ev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ngeexsbgt"/><path class="pr5m-s0ev"/></g>`,
		"fallback": "doodle-icons:cart",
	});
}

export default Component;
