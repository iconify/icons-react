import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4gxjhk3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary z4gxjhk3i"/>`,
		"fallback": "iconaut:heart-duotone",
	});
}

export default Component;
