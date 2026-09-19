import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8u_vxo6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8u_vxo6r"/>`,
		"fallback": "heroicons-outline:cube-transparent",
	});
}

export default Component;
