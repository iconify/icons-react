import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roj7v4bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="roj7v4bmf"/>`,
		"fallback": "streamline-freehand:connect-flash",
	});
}

export default Component;
