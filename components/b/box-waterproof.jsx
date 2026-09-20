import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fkkn2_rtr.css';
import '../../css/z/zqlooet8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fkkn2_rtr"/><path class="zqlooet8s"/></g>`,
		"fallback": "streamline-sharp-color:box-waterproof",
	});
}

export default Component;
