import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q29fx-bpn.css';
import '../../css/v/vbvn_pb8o.css';
import '../../css/n/nrwwj1bwn.css';
import '../../css/d/dl484by1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q29fx-bpn"/><path class="vbvn_pb8o"/><path class="nrwwj1bwn"/><path class="dl484by1y"/></g>`,
		"fallback": "streamline-freehand:allowances-no-food-sign",
	});
}

export default Component;
