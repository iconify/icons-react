import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfyge_n8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfyge_n8v"/>`,
		"fallback": "coolicons:heart-alt-bulk-round",
	});
}

export default Component;
