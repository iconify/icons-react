import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_x4y6-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij_x4y6-f"/>`,
		"fallback": "gcp:cloud-router",
	});
}

export default Component;
