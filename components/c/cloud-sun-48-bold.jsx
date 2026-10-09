import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubs4oo9h.css';
import '../../css/c/cohq8848r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vubs4oo9h"/><path class="cohq8848r"/>`,
		"fallback": "energy-icons:cloud-sun-48-bold",
	});
}

export default Component;
