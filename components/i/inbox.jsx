import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l848a914o.css';
import '../../css/l/l78xhxq3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l848a914o"/><path class="l78xhxq3i"/></g>`,
		"fallback": "akar-icons:inbox",
	});
}

export default Component;
