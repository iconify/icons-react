import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3wzac9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qs3wzac9e"/>`,
		"fallback": "healthicons:cannabis-outline",
	});
}

export default Component;
