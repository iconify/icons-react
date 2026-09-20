import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsxeq50_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsxeq50_g"/>`,
		"fallback": "solar:flag-2-bold",
	});
}

export default Component;
