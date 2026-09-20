import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/k/k3bxz2bwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="k3bxz2bwg"/></g>`,
		"fallback": "streamline-plump-color:discount-percent-cutout",
	});
}

export default Component;
