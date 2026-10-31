import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6q2bbc_t.css';
import '../../css/o/ot9k8kbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6q2bbc_t"/><path class="ot9k8kbpn"/></g>`,
		"fallback": "coolicons:cat-alt-duotone-round",
	});
}

export default Component;
