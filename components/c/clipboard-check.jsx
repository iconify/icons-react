import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w35xd2bpf.css';
import '../../css/k/kcy_i3zwf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="w35xd2bpf"/><path class="kcy_i3zwf"/></g>`,
		"fallback": "doodle-icons:clipboard-check",
	});
}

export default Component;
