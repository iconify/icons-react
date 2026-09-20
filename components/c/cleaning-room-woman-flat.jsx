import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo802rbjr.css';
import '../../css/p/pmik5slma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vo802rbjr"/><path class="pmik5slma"/></g>`,
		"fallback": "streamline-plump-color:cleaning-room-woman-flat",
	});
}

export default Component;
