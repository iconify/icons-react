import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re6c-mj_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re6c-mj_x"/>`,
		"fallback": "mdi:axis-x-arrow-lock",
	});
}

export default Component;
