import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3h3z0iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3h3z0iu"/>`,
		"fallback": "typcn:cloud-storage-outline",
	});
}

export default Component;
