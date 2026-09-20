import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iihjozbfc.css';
import '../../css/t/ty7j1t4-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iihjozbfc"/><path class="ty7j1t4-k"/></g>`,
		"fallback": "tabler:air-traffic-control",
	});
}

export default Component;
