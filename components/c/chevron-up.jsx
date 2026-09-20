import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl67rc6aj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl67rc6aj"/>`,
		"fallback": "system-uicons:chevron-up",
	});
}

export default Component;
