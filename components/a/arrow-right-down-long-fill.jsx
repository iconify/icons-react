import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m112204ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m112204ku"/>`,
		"fallback": "ri:arrow-right-down-long-fill",
	});
}

export default Component;
