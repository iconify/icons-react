import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3gyc7_cw.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3gyc7_cw"/>`,
		"fallback": "fa6-solid:desktop",
	});
}

export default Component;
