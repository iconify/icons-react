import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clmm-tbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clmm-tbgy"/>`,
		"fallback": "ri:add-box-fill",
	});
}

export default Component;
