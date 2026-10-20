import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjtwhsb_o.css';
import '../../css/x/xg42qpbkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjtwhsb_o"/><path class="xg42qpbkn"/>`,
		"fallback": "energy-icons:align-top-48",
	});
}

export default Component;
