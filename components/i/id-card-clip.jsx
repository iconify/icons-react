import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl1ddvjxm.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl1ddvjxm"/>`,
		"fallback": "fa6-solid:id-card-clip",
	});
}

export default Component;
