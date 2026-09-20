import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ess69bcms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ess69bcms"/>`,
		"fallback": "solar:full-screen-square-bold",
	});
}

export default Component;
