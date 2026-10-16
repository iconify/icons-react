import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2qfxbce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2qfxbce"/>`,
		"fallback": "energy-icons:chevrons-up-down-48-bold",
	});
}

export default Component;
