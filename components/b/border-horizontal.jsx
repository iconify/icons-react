import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exl30abif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exl30abif"/>`,
		"fallback": "cil:border-horizontal",
	});
}

export default Component;
