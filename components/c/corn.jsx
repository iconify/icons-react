import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w8stknbrb.css';
import '../../css/q/qww7ufbwy.css';
import '../../css/f/fiiaz4b4w.css';
import '../../css/q/q87nvackg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="w8stknbrb"/><path class="qww7ufbwy"/><path class="fiiaz4b4w"/><path class="q87nvackg"/></g>`,
		"fallback": "doodle-icons:corn",
	});
}

export default Component;
