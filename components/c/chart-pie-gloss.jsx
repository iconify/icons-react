import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aci9eqc5h.css';
import '../../css/e/eco6wjltv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="aci9eqc5h wm-k"/><path class="eco6wjltv wm-a"/></g>`,
		"fallback": "withicons:chart-pie-gloss",
	});
}

export default Component;
