import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyv54vbof.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyv54vbof"/>`,
		"fallback": "system-uicons:chevron-open",
	});
}

export default Component;
