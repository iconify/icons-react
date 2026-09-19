import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd_2l6tse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd_2l6tse"/>`,
		"fallback": "fa-solid:cannabis",
	});
}

export default Component;
