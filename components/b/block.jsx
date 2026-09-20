import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkj_rzrox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkj_rzrox"/>`,
		"fallback": "mdi:block",
	});
}

export default Component;
