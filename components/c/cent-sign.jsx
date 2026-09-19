import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyedbw5gh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyedbw5gh"/>`,
		"fallback": "fa6-solid:cent-sign",
	});
}

export default Component;
