import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcdd--2ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcdd--2ea"/>`,
		"fallback": "tdesign:arrow-left-down-circle-filled",
	});
}

export default Component;
