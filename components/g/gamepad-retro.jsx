import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj4b3949s.css';

const viewBox = {"width":24,"height":24,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj4b3949s"/>`,
		"fallback": "jam:gamepad-retro",
	});
}

export default Component;
