import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_uieb0c.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in_uieb0c"/>`,
		"fallback": "fa6-solid:arrow-up-short-wide",
	});
}

export default Component;
