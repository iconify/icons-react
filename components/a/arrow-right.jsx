import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bmcn0j8tx.css';
import '../../css/k/kwm0wubux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="bmcn0j8tx"/><path class="kwm0wubux"/></g>`,
		"fallback": "doodle-icons:arrow-right",
	});
}

export default Component;
