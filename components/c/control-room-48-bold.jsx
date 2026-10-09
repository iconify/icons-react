import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeucaqz1x.css';
import '../../css/o/o3-2b8bgp.css';
import '../../css/w/wyrzc4bau.css';
import '../../css/k/k0x9-5bje.css';
import '../../css/r/rkge1_woi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeucaqz1x"/><path class="o3-2b8bgp"/><path class="wyrzc4bau"/><path class="k0x9-5bje"/><path class="rkge1_woi"/>`,
		"fallback": "energy-icons:control-room-48-bold",
	});
}

export default Component;
