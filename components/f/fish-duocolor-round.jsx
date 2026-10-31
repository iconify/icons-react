import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jd_0ujzkm.css';
import '../../css/p/pk_rosbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jd_0ujzkm"/><path class="pk_rosbpc"/></g>`,
		"fallback": "coolicons:fish-duocolor-round",
	});
}

export default Component;
