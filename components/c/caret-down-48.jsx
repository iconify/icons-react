import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uli29fbam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uli29fbam"/>`,
		"fallback": "energy-icons:caret-down-48",
	});
}

export default Component;
