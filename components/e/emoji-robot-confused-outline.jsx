import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbuaxzl0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbuaxzl0n"/>`,
		"fallback": "mdi:emoji-robot-confused-outline",
	});
}

export default Component;
