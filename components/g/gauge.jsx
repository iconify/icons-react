import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dxtrl7bap.css';
import '../../css/o/oiux9v30g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="dxtrl7bap"/><path class="oiux9v30g"/></g>`,
		"fallback": "doodle-icons:gauge",
	});
}

export default Component;
