import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7phojbjv.css';
import '../../css/o/ojlbdmb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7phojbjv"/><path class="ojlbdmb5c"/>`,
		"fallback": "bx:bookmarks",
	});
}

export default Component;
