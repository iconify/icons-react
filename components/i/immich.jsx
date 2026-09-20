import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wws8pq6wg.css';
import '../../css/p/padi-ibdk.css';
import '../../css/v/vh375vbaq.css';
import '../../css/k/kod19rbcy.css';
import '../../css/n/nxrl_e3_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wws8pq6wg"/><path class="padi-ibdk"/><path class="vh375vbaq"/><path class="kod19rbcy"/><path class="nxrl_e3_d"/>`,
		"fallback": "selfhst:immich",
	});
}

export default Component;
