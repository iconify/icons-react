import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_9u5nen.css';
import '../../css/p/pomhvvbhz.css';
import '../../css/y/ylrt5zbde.css';
import '../../css/w/wrf5k7n3c.css';
import '../../css/y/y71k3obmn.css';
import '../../css/k/kc3s22bpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_9u5nen"/><path class="pomhvvbhz"/><path class="ylrt5zbde"/><path class="wrf5k7n3c"/><path class="y71k3obmn"/><path class="kc3s22bpn"/>`,
		"fallback": "selfhst:fleet-dm",
	});
}

export default Component;
