import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m43934rcx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m43934rcx"/>`,
		"fallback": "icon-park-outline:arrow-down",
	});
}

export default Component;
