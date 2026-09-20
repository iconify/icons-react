import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdttxe_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdttxe_0o"/>`,
		"fallback": "mdi:card-off-outline",
	});
}

export default Component;
