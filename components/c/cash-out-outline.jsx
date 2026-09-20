import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doo982blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="doo982blv"/>`,
		"fallback": "solar:cash-out-outline",
	});
}

export default Component;
