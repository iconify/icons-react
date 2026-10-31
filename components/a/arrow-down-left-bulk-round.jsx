import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7-8rccxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7-8rccxv"/>`,
		"fallback": "coolicons:arrow-down-left-bulk-round",
	});
}

export default Component;
