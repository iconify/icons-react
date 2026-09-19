import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0ul-uz9o.css';
import '../../css/o/oc7c-mb5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0ul-uz9o"/><path class="oc7c-mb5o"/>`,
		"fallback": "cil:alarm",
	});
}

export default Component;
