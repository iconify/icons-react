import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0t44tbvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0t44tbvy"/>`,
		"fallback": "energy-icons:bank-48-bold",
	});
}

export default Component;
