import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/k/k5s120eth.css';
import '../../css/w/wi3428b9q.css';
import '../../css/h/hhgkeq8xm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="k5s120eth"/><path class="wi3428b9q"/><path class="hhgkeq8xm"/></g>`,
		"fallback": "streamline-plump:drop-down-menu",
	});
}

export default Component;
