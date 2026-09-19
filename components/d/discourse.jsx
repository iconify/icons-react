import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-ihumxm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-ihumxm"/>`,
		"fallback": "fa7-brands:discourse",
	});
}

export default Component;
