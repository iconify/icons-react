import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7gwxphgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7gwxphgh"/>`,
		"fallback": "mynaui:chevron-down-waves-solid",
	});
}

export default Component;
