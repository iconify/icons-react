import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f49xbq6dz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f49xbq6dz"/>`,
		"fallback": "fa6-solid:house-medical-flag",
	});
}

export default Component;
