import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do5a3zb7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do5a3zb7m"/>`,
		"fallback": "energy-icons:bat-48",
	});
}

export default Component;
