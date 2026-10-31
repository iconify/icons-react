import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ew0v-7bvs.css';
import '../../css/t/tscgxgb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ew0v-7bvs"/><path class="tscgxgb4c"/></g>`,
		"fallback": "coolicons:align-center-vertical-duocolor-round",
	});
}

export default Component;
