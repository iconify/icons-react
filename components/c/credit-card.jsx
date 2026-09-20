import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj_k5ubru.css';
import '../../css/s/sgg_i_qmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="oj_k5ubru"/><path class="sgg_i_qmu"/></g>`,
		"fallback": "meteor-icons:credit-card",
	});
}

export default Component;
