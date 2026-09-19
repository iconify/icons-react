import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztfk8nb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztfk8nb5p"/>`,
		"fallback": "heroicons:bars-arrow-up",
	});
}

export default Component;
