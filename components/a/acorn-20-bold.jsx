import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gozz3nbxj.css';
import '../../css/m/mwkd_0bba.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gozz3nbxj"/><path class="mwkd_0bba"/>`,
		"fallback": "energy-icons:acorn-20-bold",
	});
}

export default Component;
