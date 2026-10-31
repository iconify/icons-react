import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjb55wb_o.css';
import '../../css/a/au-pn_blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rjb55wb_o"/><path class="au-pn_blf"/></g>`,
		"fallback": "coolicons:atom-duocolor-round",
	});
}

export default Component;
