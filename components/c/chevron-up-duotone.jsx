import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veyfuxbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veyfuxbpn"/>`,
		"fallback": "keyline-icons:chevron-up-duotone",
	});
}

export default Component;
