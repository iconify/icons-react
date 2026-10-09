import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo1yxebdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo1yxebdr"/>`,
		"fallback": "energy-icons:caret-left-48",
	});
}

export default Component;
