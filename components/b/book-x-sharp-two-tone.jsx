import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q68xhu0of.css';
import '../../css/q/qam5glj7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q68xhu0of"/><path class="qam5glj7j"/></g>`,
		"fallback": "keyline-icons:book-x-sharp-two-tone",
	});
}

export default Component;
