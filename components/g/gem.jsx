import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5kq2yfh.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5kq2yfh"/>`,
		"fallback": "fa-regular:gem",
	});
}

export default Component;
