import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkkf-abgy.css';
import '../../css/e/e73jcmbxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkkf-abgy"/><path class="e73jcmbxs"/>`,
		"fallback": "energy-icons:gas-flare-48",
	});
}

export default Component;
