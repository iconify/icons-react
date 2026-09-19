import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm6ujac-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm6ujac-w"/>`,
		"fallback": "fa6-solid:gift",
	});
}

export default Component;
