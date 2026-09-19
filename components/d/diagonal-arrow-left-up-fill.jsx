import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbvvh5dtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbvvh5dtx"/>`,
		"fallback": "eva:diagonal-arrow-left-up-fill",
	});
}

export default Component;
