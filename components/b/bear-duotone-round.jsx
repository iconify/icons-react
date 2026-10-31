import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3_mppelh.css';
import '../../css/s/s-i3zxb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3_mppelh"/><path class="s-i3zxb3b"/></g>`,
		"fallback": "coolicons:bear-duotone-round",
	});
}

export default Component;
