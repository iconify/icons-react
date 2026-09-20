import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr7z-mv3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr7z-mv3d"/>`,
		"fallback": "mynaui:brand-framer-solid",
	});
}

export default Component;
