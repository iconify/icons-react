import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvkad84mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvkad84mt"/>`,
		"fallback": "ri:compass-discover-fill",
	});
}

export default Component;
