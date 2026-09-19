import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tve0zhb4c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tve0zhb4c"/>`,
		"fallback": "fa6-solid:arrows-down-to-line",
	});
}

export default Component;
