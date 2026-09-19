import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2sj9mb8x.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2sj9mb8x"/>`,
		"fallback": "fa6-solid:eject",
	});
}

export default Component;
