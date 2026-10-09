import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w98uktbvf.css';
import '../../css/e/e3n-urbva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w98uktbvf"/><path class="e3n-urbva"/>`,
		"fallback": "energy-icons:ice-cream-48-bold",
	});
}

export default Component;
