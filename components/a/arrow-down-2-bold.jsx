import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhcvz-r0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhcvz-r0d"/>`,
		"fallback": "iconamoon:arrow-down-2-bold",
	});
}

export default Component;
