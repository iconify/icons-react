import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmnue0ahf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmnue0ahf"/>`,
		"fallback": "lets-icons:chield-fill",
	});
}

export default Component;
