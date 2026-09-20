import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxd_wxvqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxd_wxvqj"/>`,
		"fallback": "simple-icons:gtk",
	});
}

export default Component;
