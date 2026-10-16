import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sox1xn30r.css';
import '../../css/y/y--l7jbip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sox1xn30r"/><path class="y--l7jbip"/>`,
		"fallback": "energy-icons:distribution-board-48-bold",
	});
}

export default Component;
