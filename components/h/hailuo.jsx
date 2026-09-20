import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhln_6f7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhln_6f7o"/>`,
		"fallback": "thesvg-color:hailuo",
	});
}

export default Component;
