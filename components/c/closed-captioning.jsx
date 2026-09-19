import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aczmbrb6b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aczmbrb6b"/>`,
		"fallback": "fa6-solid:closed-captioning",
	});
}

export default Component;
