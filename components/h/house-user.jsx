import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km1ktek-m.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km1ktek-m"/>`,
		"fallback": "fa-solid:house-user",
	});
}

export default Component;
