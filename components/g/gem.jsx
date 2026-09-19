import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re_-x7b3h.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re_-x7b3h"/>`,
		"fallback": "fa-solid:gem",
	});
}

export default Component;
