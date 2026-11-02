import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osn0qiy8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osn0qiy8u"/>`,
		"fallback": "mingcute:cellphone-2-fill",
	});
}

export default Component;
