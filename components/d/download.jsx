import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dgxqcjigj.css';
import '../../css/z/z5l4z6b7y.css';
import '../../css/w/w63xf2g_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="dgxqcjigj"/><path class="z5l4z6b7y"/><path class="w63xf2g_k"/></g>`,
		"fallback": "doodle-icons:download",
	});
}

export default Component;
