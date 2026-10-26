import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amaq5lbcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amaq5lbcr"/>`,
		"fallback": "doodle-icons:chevron-left",
	});
}

export default Component;
