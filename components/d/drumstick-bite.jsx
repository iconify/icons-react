import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkrsl5ydm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkrsl5ydm"/>`,
		"fallback": "fa7-solid:drumstick-bite",
	});
}

export default Component;
