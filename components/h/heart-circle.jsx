import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3roe6gyn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3roe6gyn"/>`,
		"fallback": "f7:heart-circle",
	});
}

export default Component;
