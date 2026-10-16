import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzc0f4bbg.css';
import '../../css/d/d6nu3aclr.css';
import '../../css/m/mky7hybil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzc0f4bbg"/><path class="d6nu3aclr"/><path class="mky7hybil"/>`,
		"fallback": "energy-icons:freezing-rain-48-bold",
	});
}

export default Component;
