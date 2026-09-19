import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0m-ghb_b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0m-ghb_b"/>`,
		"fallback": "fa6-solid:cloud-moon-rain",
	});
}

export default Component;
