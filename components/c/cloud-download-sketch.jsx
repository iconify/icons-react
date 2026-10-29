import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i5ft99b3t.css';
import '../../css/m/moyq6cc5d.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/v/vkmadnjhr.css';
import '../../css/n/nqpb-kb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i5ft99b3t"/><path class="moyq6cc5d wm-k"/><path class="m2ebxhp-u wm-k"/><path class="vkmadnjhr wm-s"/><path class="nqpb-kb-p wm-s"/></g>`,
		"fallback": "withicons:cloud-download-sketch",
	});
}

export default Component;
