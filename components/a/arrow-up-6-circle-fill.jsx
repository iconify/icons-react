import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l409kybhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l409kybhi"/>`,
		"fallback": "iconamoon:arrow-up-6-circle-fill",
	});
}

export default Component;
