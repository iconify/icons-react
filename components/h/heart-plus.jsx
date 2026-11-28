import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_gzc8c8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_gzc8c8y"/>`,
		"fallback": "noviair-light:heart-plus",
	});
}

export default Component;
