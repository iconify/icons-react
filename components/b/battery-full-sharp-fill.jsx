import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lq8ad-lob.css';
import '../../css/k/kjk2ocb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="lq8ad-lob"/><path class="kjk2ocb0m"/></g>`,
		"fallback": "keyline-icons:battery-full-sharp-fill",
	});
}

export default Component;
