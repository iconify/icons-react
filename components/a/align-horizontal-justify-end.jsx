import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4migb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4migb0j"/>`,
		"fallback": "hugeicons:align-horizontal-justify-end",
	});
}

export default Component;
