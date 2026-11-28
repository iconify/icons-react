import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy1u76bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy1u76bbj primary"/>`,
		"fallback": "iconaut:arrow-up-right-duotone",
	});
}

export default Component;
