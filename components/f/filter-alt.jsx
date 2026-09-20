import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs59dwcbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs59dwcbx"/>`,
		"fallback": "mi:filter-alt",
	});
}

export default Component;
