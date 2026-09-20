import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_29c7b-y.css';
import '../../css/p/pvz3l-b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_29c7b-y"/><path class="pvz3l-b7p"/>`,
		"fallback": "uim:arrow-circle-right",
	});
}

export default Component;
