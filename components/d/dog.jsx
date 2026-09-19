import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx9-vt3cm.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx9-vt3cm"/>`,
		"fallback": "fa6-solid:dog",
	});
}

export default Component;
