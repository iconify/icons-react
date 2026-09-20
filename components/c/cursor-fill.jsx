import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5-xa8bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5-xa8bbf"/>`,
		"fallback": "ri:cursor-fill",
	});
}

export default Component;
