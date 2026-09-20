import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kvmqvu8hq.css';
import '../../css/i/i5aoztm3p.css';
import '../../css/p/pgeax7lhd.css';
import '../../css/c/cq-f-xmyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kvmqvu8hq"/><path class="i5aoztm3p"/><path class="pgeax7lhd"/><path class="cq-f-xmyl"/></g>`,
		"fallback": "streamline-plump-color:beer-pitch",
	});
}

export default Component;
