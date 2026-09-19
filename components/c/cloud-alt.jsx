import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz58jx3gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz58jx3gm"/>`,
		"fallback": "boxicons:cloud-alt",
	});
}

export default Component;
