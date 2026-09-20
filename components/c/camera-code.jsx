import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovdhzzqne.css';
import '../../css/q/q1n2pmbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovdhzzqne"/><path class="q1n2pmbay"/></g>`,
		"fallback": "tabler:camera-code",
	});
}

export default Component;
