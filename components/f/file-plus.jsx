import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/m/mnq2p-hlq.css';
import '../../css/j/jn3tix0cr.css';
import '../../css/d/d5mydcbjt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="mnq2p-hlq"/><path class="jn3tix0cr"/><path class="d5mydcbjt"/></g>`,
		"fallback": "doodle-icons:file-plus",
	});
}

export default Component;
