import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx7awmbxt.css';
import '../../css/t/tworh6b6a.css';
import '../../css/s/sqise2bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k yx7awmbxt"/><path class="tworh6b6a wm-shine"/><path class="sqise2bpb wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-bear",
	});
}

export default Component;
