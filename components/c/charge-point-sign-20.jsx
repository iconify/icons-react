import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2eh8bdrp.css';
import '../../css/e/ewna1ybwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2eh8bdrp"/><path class="ewna1ybwf"/>`,
		"fallback": "energy-icons:charge-point-sign-20",
	});
}

export default Component;
