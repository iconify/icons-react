import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lx_5dtbzi.css';
import '../../css/w/wxe2_ouwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lx_5dtbzi"/><path class="wxe2_ouwj"/></g>`,
		"fallback": "coolicons:award-duocolor-round",
	});
}

export default Component;
