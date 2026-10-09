import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0kc3bl3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0kc3bl3t"/>`,
		"fallback": "energy-icons:align-center-48",
	});
}

export default Component;
