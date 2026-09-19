import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr5t_bc0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr5t_bc0y"/>`,
		"fallback": "fa6-solid:bomb",
	});
}

export default Component;
