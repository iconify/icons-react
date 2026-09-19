import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pahppx3dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pahppx3dv"/>`,
		"fallback": "gridicons:cloud-outline",
	});
}

export default Component;
