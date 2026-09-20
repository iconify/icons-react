import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe_z-t4nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe_z-t4nf"/>`,
		"fallback": "tabler:direction-horizontal",
	});
}

export default Component;
