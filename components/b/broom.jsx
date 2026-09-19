import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq3_6fbrh.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq3_6fbrh"/>`,
		"fallback": "fa6-solid:broom",
	});
}

export default Component;
