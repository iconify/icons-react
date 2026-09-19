import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy79ysa6l.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy79ysa6l"/>`,
		"fallback": "fa-solid:inbox",
	});
}

export default Component;
