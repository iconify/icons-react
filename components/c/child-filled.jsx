import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quhy5abwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quhy5abwy"/>`,
		"fallback": "boxicons:child-filled",
	});
}

export default Component;
