import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp1re3c8g.css';
import '../../css/g/gdtbnxj2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp1re3c8g"/><path class="gdtbnxj2e"/>`,
		"fallback": "cil:copy",
	});
}

export default Component;
