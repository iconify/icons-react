import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr36w-16i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mr36w-16i"/>`,
		"fallback": "reicon:heart-pulse-filled",
	});
}

export default Component;
