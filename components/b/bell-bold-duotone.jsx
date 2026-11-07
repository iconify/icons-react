import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8czseb2v.css';
import '../../css/e/e_ax9fbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8czseb2v"/><path class="e_ax9fbpe"/>`,
		"fallback": "solar:bell-bold-duotone",
	});
}

export default Component;
