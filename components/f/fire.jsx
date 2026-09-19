import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiuw0lbpq.css';

const viewBox = {"width":344,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiuw0lbpq"/>`,
		"fallback": "zmdi:fire",
	});
}

export default Component;
