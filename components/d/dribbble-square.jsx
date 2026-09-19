import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj_5p1hkz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj_5p1hkz"/>`,
		"fallback": "fa-brands:dribbble-square",
	});
}

export default Component;
