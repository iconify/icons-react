import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p0ac-3b3y.css';
import '../../css/l/ly5956p2q.css';
import '../../css/r/rua3ltb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p0ac-3b3y"/><circle class="ly5956p2q"/><path class="rua3ltb1v"/></g>`,
		"fallback": "icon-park:endpoint-round",
	});
}

export default Component;
