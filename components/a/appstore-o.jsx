import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m44awd2kp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m44awd2kp"/>`,
		"fallback": "uiw:appstore-o",
	});
}

export default Component;
