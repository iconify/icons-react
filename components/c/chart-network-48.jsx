import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq_9-8b5f.css';
import '../../css/d/dfsy1hrxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq_9-8b5f"/><path class="dfsy1hrxz"/>`,
		"fallback": "energy-icons:chart-network-48",
	});
}

export default Component;
