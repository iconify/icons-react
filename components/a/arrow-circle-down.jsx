import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyzqvq11k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyzqvq11k"/>`,
		"fallback": "heroicons-outline:arrow-circle-down",
	});
}

export default Component;
