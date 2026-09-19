import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4k6nfuz.css';
import '../../css/e/e05dbabmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4k6nfuz"/><path class="e05dbabmu"/>`,
		"fallback": "boxicons:beach",
	});
}

export default Component;
