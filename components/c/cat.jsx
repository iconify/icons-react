import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5xcf3m3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5xcf3m3b"/>`,
		"fallback": "cil:cat",
	});
}

export default Component;
