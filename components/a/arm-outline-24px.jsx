import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb_ragf0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb_ragf0m"/>`,
		"fallback": "healthicons:arm-outline-24px",
	});
}

export default Component;
