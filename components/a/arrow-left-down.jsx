import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xkmppwbxm.css';
import '../../css/i/i0okwyg0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xkmppwbxm"/><path class="i0okwyg0u"/></g>`,
		"fallback": "icon-park:arrow-left-down",
	});
}

export default Component;
