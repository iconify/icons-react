import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg_xm2btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg_xm2btp"/>`,
		"fallback": "flowbite:grid-plus-outline",
	});
}

export default Component;
