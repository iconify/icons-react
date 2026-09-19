import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez_yp4b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez_yp4b6r"/>`,
		"fallback": "feather:cloud-drizzle",
	});
}

export default Component;
