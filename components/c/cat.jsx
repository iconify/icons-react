import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uvcaqmbth.css';
import '../../css/g/g4g9h7_im.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uvcaqmbth"/><path class="g4g9h7_im"/></g>`,
		"fallback": "doodle-icons:cat",
	});
}

export default Component;
