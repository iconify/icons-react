import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5ffo1bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5ffo1bso"/>`,
		"fallback": "hugeicons:border-horizontal",
	});
}

export default Component;
