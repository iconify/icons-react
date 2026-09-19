import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weox92b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weox92b5n"/>`,
		"fallback": "boxicons:female-filled",
	});
}

export default Component;
