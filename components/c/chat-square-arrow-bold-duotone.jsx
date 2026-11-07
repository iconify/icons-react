import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfz6qsjee.css';
import '../../css/c/cq_7-dbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfz6qsjee"/><path clip-rule="evenodd" class="cq_7-dbln"/>`,
		"fallback": "solar:chat-square-arrow-bold-duotone",
	});
}

export default Component;
