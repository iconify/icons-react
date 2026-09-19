import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2d22zb_e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2d22zb_e"/>`,
		"fallback": "fa7-regular:home",
	});
}

export default Component;
