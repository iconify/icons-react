import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3n0ufbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3n0ufbgi"/>`,
		"fallback": "noviair-light:dashboard-plus",
	});
}

export default Component;
