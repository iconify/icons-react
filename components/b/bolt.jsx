import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8xr0sedz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8xr0sedz"/>`,
		"fallback": "fa6-solid:bolt",
	});
}

export default Component;
