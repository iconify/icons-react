import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5e3orbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5e3orbgn"/>`,
		"fallback": "withicons:door-closed-solid",
	});
}

export default Component;
