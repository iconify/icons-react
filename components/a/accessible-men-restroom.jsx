import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwv5vgb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwv5vgb1c"/>`,
		"fallback": "guidance:accessible-men-restroom",
	});
}

export default Component;
