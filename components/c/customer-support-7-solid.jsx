import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q60qlub_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q60qlub_r"/>`,
		"fallback": "streamline-plump:customer-support-7-solid",
	});
}

export default Component;
