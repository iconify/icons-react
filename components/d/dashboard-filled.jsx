import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0f9fm8gg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0f9fm8gg"/>`,
		"fallback": "ix:dashboard-filled",
	});
}

export default Component;
