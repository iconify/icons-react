import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utak5gbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utak5gbby"/>`,
		"fallback": "uis:direction",
	});
}

export default Component;
