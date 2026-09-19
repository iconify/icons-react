import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfvhcyw4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfvhcyw4m"/>`,
		"fallback": "cbi:extension-eu",
	});
}

export default Component;
