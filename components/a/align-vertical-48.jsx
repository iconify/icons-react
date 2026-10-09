import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia5lbtbup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia5lbtbup"/>`,
		"fallback": "energy-icons:align-vertical-48",
	});
}

export default Component;
