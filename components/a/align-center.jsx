import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sul6zry_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sul6zry_m"/>`,
		"fallback": "iconoir:align-center",
	});
}

export default Component;
