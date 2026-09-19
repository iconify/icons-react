import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulv-178_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulv-178_k"/>`,
		"fallback": "heroicons:ellipsis-horizontal",
	});
}

export default Component;
