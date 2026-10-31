import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hil-cl8kn.css';
import '../../css/b/bys1qnb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hil-cl8kn"/><path class="bys1qnb8v"/></g>`,
		"fallback": "coolicons:contacts-duocolor-round",
	});
}

export default Component;
