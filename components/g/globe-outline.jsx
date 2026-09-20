import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmmn-y2cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmmn-y2cs"/>`,
		"fallback": "solar:globe-outline",
	});
}

export default Component;
