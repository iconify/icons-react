import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0lv7f-we.css';
import '../../css/q/qvzzbg1ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0lv7f-we"/><path class="qvzzbg1ql"/></g>`,
		"fallback": "coolicons:baseball-duotone-round",
	});
}

export default Component;
