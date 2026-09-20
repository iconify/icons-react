import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca-ltmebp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca-ltmebp"/>`,
		"fallback": "mdi:battery-40-bluetooth",
	});
}

export default Component;
