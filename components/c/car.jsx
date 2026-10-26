import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/nr391wbkf.css';
import '../../css/w/wf6mg6b8p.css';
import '../../css/l/l3-io0b4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="nr391wbkf"/><path class="wf6mg6b8p"/><path class="l3-io0b4c"/></g>`,
		"fallback": "doodle-icons:car",
	});
}

export default Component;
