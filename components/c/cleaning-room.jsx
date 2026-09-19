import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn1kokx4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn1kokx4a"/>`,
		"fallback": "guidance:cleaning-room",
	});
}

export default Component;
