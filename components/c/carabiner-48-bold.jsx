import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flffaub2p.css';
import '../../css/h/hryfpbjgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flffaub2p"/><path class="hryfpbjgz"/>`,
		"fallback": "energy-icons:carabiner-48-bold",
	});
}

export default Component;
