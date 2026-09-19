import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5_kgwi9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5_kgwi9z"/>`,
		"fallback": "fa6-solid:crutch",
	});
}

export default Component;
