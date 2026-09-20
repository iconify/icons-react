import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odgb6sblx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odgb6sblx"/>`,
		"fallback": "ix:eye-cancelled-filled",
	});
}

export default Component;
