import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od_856e-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od_856e-c"/>`,
		"fallback": "lets-icons:arrow-drop-down",
	});
}

export default Component;
