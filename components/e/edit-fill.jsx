import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmlrazf5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmlrazf5d"/>`,
		"fallback": "ri:edit-fill",
	});
}

export default Component;
