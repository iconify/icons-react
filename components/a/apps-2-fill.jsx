import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as4xm9byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as4xm9byh"/>`,
		"fallback": "ri:apps-2-fill",
	});
}

export default Component;
