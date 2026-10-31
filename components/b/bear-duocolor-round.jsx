import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlyae5b3r.css';
import '../../css/i/izxjarjel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mlyae5b3r"/><path class="izxjarjel"/></g>`,
		"fallback": "coolicons:bear-duocolor-round",
	});
}

export default Component;
