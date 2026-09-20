import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmz6kf.css';
import '../../css/d/d-jarxnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmz6kf"/>`,
		"fallback": "line-md:close-to-menu-transition",
	});
}

export default Component;
