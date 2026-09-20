import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kovjz9b2p.css';
import '../../css/p/p0vwv3b3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kovjz9b2p"/><path class="p0vwv3b3e"/></g>`,
		"fallback": "streamline-plump-color:expand-horizontal-2-flat",
	});
}

export default Component;
