import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov0lzdbhd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov0lzdbhd"/>`,
		"fallback": "pinhead:badge-shield-with-exclamation-point",
	});
}

export default Component;
