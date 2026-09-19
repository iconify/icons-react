import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr1u8et0d.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr1u8et0d"/>`,
		"fallback": "fa-solid:hands-wash",
	});
}

export default Component;
