import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrfwqwnbz.css';
import '../../css/i/in3blmbct.css';
import '../../css/c/cg_uq7u7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrfwqwnbz"/><path class="in3blmbct"/><path class="cg_uq7u7r"/>`,
		"fallback": "energy-icons:angle-grinder-20-bold",
	});
}

export default Component;
