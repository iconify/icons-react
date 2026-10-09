import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5sdatbxs.css';
import '../../css/e/e0qbytbil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5sdatbxs"/><path class="e0qbytbil"/>`,
		"fallback": "energy-icons:ice-cream-48",
	});
}

export default Component;
