import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl86v1b0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl86v1b0i"/>`,
		"fallback": "ix:chevron-left",
	});
}

export default Component;
