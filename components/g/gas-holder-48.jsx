import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr5mp9iol.css';
import '../../css/m/mw4tppx2s.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr5mp9iol"/><path class="mw4tppx2s"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:gas-holder-48",
	});
}

export default Component;
