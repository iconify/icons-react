import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq1625qbk.css';
import '../../css/v/v0h99ub0p.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq1625qbk"/><path class="v0h99ub0p"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:clock-check-48-bold",
	});
}

export default Component;
