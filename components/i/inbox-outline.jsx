import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd7ge_b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd7ge_b4n"/>`,
		"fallback": "mdi:inbox-outline",
	});
}

export default Component;
