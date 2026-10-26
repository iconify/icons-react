import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ayp_1teqm.css';
import '../../css/o/ofu4e2jlq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ayp_1teqm"/><path class="ofu4e2jlq"/></g>`,
		"fallback": "doodle-icons:browser",
	});
}

export default Component;
