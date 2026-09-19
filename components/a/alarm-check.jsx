import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsomaxd5w.css';
import '../../css/s/sc_o8zb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsomaxd5w"/><path class="sc_o8zb9y"/>`,
		"fallback": "boxicons:alarm-check",
	});
}

export default Component;
