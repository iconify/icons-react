import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug3bg7b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug3bg7b3m"/>`,
		"fallback": "ri:boxing-fill",
	});
}

export default Component;
