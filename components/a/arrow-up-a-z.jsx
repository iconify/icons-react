import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkhc6obyd.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkhc6obyd"/>`,
		"fallback": "fa6-solid:arrow-up-a-z",
	});
}

export default Component;
