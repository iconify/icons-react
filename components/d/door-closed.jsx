import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jarabnk1u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jarabnk1u"/>`,
		"fallback": "fa6-solid:door-closed",
	});
}

export default Component;
