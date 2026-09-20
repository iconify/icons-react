import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyhl03b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyhl03b9b"/>`,
		"fallback": "ri:folder-open-fill",
	});
}

export default Component;
