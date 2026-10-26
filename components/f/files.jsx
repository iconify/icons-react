import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l3_vg2x-s.css';
import '../../css/x/xonehqbol.css';
import '../../css/n/np21q2bms.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="l3_vg2x-s"/><path class="xonehqbol"/><path class="np21q2bms"/></g>`,
		"fallback": "doodle-icons:files",
	});
}

export default Component;
