import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m68fv6b_p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m68fv6b_p"/>`,
		"fallback": "pinhead:hand-dropping-circles",
	});
}

export default Component;
