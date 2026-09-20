import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k2-cmqk-r.css';
import '../../css/i/ir1b35b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k2-cmqk-r"/><path class="ir1b35b3y"/></g>`,
		"fallback": "keyline-icons:bell-off-fill",
	});
}

export default Component;
