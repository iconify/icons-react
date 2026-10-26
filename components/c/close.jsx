import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n6lj9wybl.css';
import '../../css/a/a4c4nxndy.css';
import '../../css/l/lwa4csfsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="n6lj9wybl"/><path class="a4c4nxndy"/><path class="lwa4csfsb"/></g>`,
		"fallback": "doodle-icons:close",
	});
}

export default Component;
