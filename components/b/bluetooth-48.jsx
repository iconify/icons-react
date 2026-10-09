import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_pu7wbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_pu7wbgw"/>`,
		"fallback": "energy-icons:bluetooth-48",
	});
}

export default Component;
