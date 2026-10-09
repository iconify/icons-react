import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tartq6ezv.css';
import '../../css/y/yksg3jbil.css';
import '../../css/i/isueqgbyv.css';
import '../../css/n/nhtp_9brk.css';
import '../../css/v/vmdt2g_2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tartq6ezv"/><path class="yksg3jbil"/><path class="isueqgbyv"/><path class="nhtp_9brk"/><path class="vmdt2g_2p"/>`,
		"fallback": "energy-icons:bulldozer-48",
	});
}

export default Component;
