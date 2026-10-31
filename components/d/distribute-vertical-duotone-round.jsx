import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg2_d1b0k.css';
import '../../css/t/tod98bcgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zg2_d1b0k"/><path class="tod98bcgn"/></g>`,
		"fallback": "coolicons:distribute-vertical-duotone-round",
	});
}

export default Component;
