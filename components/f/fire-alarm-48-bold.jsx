import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajnhz1arp.css';
import '../../css/o/o2_a8_w7a.css';
import '../../css/q/qxek88lnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajnhz1arp"/><path class="o2_a8_w7a"/><path class="qxek88lnh"/>`,
		"fallback": "energy-icons:fire-alarm-48-bold",
	});
}

export default Component;
