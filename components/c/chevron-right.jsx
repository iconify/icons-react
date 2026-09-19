import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf0wuc1-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf0wuc1-u"/>`,
		"fallback": "cil:chevron-right",
	});
}

export default Component;
