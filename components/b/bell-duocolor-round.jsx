import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6dd933zq.css';
import '../../css/q/qp00v-bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v6dd933zq"/><path class="qp00v-bvn"/></g>`,
		"fallback": "coolicons:bell-duocolor-round",
	});
}

export default Component;
