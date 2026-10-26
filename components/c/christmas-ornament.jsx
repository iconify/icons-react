import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/srmdpobsc.css';
import '../../css/m/mwt3iibvh.css';
import '../../css/l/lne6h5boh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="srmdpobsc"/><path class="mwt3iibvh"/><path class="lne6h5boh"/></g>`,
		"fallback": "doodle-icons:christmas-ornament",
	});
}

export default Component;
