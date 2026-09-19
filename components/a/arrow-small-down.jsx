import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhxd_hbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhxd_hbkk"/>`,
		"fallback": "heroicons:arrow-small-down",
	});
}

export default Component;
