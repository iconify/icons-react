import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-i0pbve.css';
import '../../css/e/elle6g26i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-i0pbve"/><path class="elle6g26i"/>`,
		"fallback": "boxicons:flower-alt",
	});
}

export default Component;
