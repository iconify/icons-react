import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t26f_urlj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t26f_urlj"/>`,
		"fallback": "pinhead:arrow-up-from-wide-rectangle-outline",
	});
}

export default Component;
