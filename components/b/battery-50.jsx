import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io_iyrrsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io_iyrrsd"/>`,
		"fallback": "heroicons:battery-50",
	});
}

export default Component;
