import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpxa9ub0u.css';
import '../../css/b/bwb32mb4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpxa9ub0u"/><path class="bwb32mb4h"/>`,
		"fallback": "energy-icons:e-fuel-48",
	});
}

export default Component;
