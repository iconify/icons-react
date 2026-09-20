import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybkd74bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybkd74bre"/>`,
		"fallback": "ri:attachment-fill",
	});
}

export default Component;
