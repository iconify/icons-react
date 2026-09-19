import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf38fyb_z.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf38fyb_z"/>`,
		"fallback": "fa-solid:comments-dollar",
	});
}

export default Component;
