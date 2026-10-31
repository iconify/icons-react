import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbjb7xbdp.css';
import '../../css/n/nhvfjmb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pbjb7xbdp"/><path class="nhvfjmb4e"/></g>`,
		"fallback": "coolicons:id-badge-duotone-round",
	});
}

export default Component;
