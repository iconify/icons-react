import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8g6hdbgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8g6hdbgd"/>`,
		"fallback": "fa6-solid:hand-point-right",
	});
}

export default Component;
