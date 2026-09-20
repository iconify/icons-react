import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enhjo2bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enhjo2bzn"/>`,
		"fallback": "mdi:clock-in",
	});
}

export default Component;
