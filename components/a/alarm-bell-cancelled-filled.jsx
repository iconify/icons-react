import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0rpfbf2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0rpfbf2f"/>`,
		"fallback": "ix:alarm-bell-cancelled-filled",
	});
}

export default Component;
