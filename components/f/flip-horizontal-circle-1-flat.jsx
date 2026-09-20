import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbziegw0k.css';
import '../../css/r/r64sk6bsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dbziegw0k"/><path class="r64sk6bsq"/></g>`,
		"fallback": "streamline-plump-color:flip-horizontal-circle-1-flat",
	});
}

export default Component;
