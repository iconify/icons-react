import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwufgkxlf.css';
import '../../css/g/gxyu-bb-c.css';
import '../../css/l/lpo2j3beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwufgkxlf"/><path class="gxyu-bb-c"/><path class="lpo2j3beg"/>`,
		"fallback": "streamline-ultimate:cellular-network-wifi-3-g-bold",
	});
}

export default Component;
