import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meftk6b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meftk6b6e"/>`,
		"fallback": "flowbite:file-lines-outline",
	});
}

export default Component;
