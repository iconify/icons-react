import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgpnbnt1e.css';
import '../../css/u/udp4m0b2t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgpnbnt1e"/><path class="udp4m0b2t"/></g>`,
		"fallback": "at-icons:cloud-arrow-down",
	});
}

export default Component;
