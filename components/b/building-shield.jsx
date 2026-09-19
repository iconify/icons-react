import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ndhbc1b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ndhbc1b"/>`,
		"fallback": "fa6-solid:building-shield",
	});
}

export default Component;
