import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_jbl3b2o.css';
import '../../css/x/xyij-ab5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q_jbl3b2o"/><path class="xyij-ab5b"/></g>`,
		"fallback": "tabler:brand-gmail",
	});
}

export default Component;
