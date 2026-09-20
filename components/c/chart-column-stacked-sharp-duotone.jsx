import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/n/ne-ytmq6y.css';
import '../../css/r/rvlc5-bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="ne-ytmq6y"/><path clip-rule="evenodd" class="rvlc5-bbp"/></g>`,
		"fallback": "keyline-icons:chart-column-stacked-sharp-duotone",
	});
}

export default Component;
