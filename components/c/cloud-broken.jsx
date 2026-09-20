import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/espppac0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="espppac0c"/>`,
		"fallback": "solar:cloud-broken",
	});
}

export default Component;
