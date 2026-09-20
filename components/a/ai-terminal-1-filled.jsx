import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu65qx2xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu65qx2xi"/>`,
		"fallback": "tdesign:ai-terminal-1-filled",
	});
}

export default Component;
