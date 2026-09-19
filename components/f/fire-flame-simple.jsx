import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6w-o8_8x.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6w-o8_8x"/>`,
		"fallback": "fa6-solid:fire-flame-simple",
	});
}

export default Component;
