import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g3_5jacow.css';
import '../../css/h/he86_fbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g3_5jacow"/><path class="he86_fbbm"/></g>`,
		"fallback": "coolicons:alarm-off-duocolor-round",
	});
}

export default Component;
