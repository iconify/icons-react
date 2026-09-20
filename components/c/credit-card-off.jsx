import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wh2k3y_4b.css';
import '../../css/c/cn6m43jim.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wh2k3y_4b"/><path clip-rule="evenodd" class="cn6m43jim"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:credit-card-off",
	});
}

export default Component;
