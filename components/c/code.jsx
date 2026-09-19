import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lblnblbof.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lblnblbof"/>`,
		"fallback": "fa6-solid:code",
	});
}

export default Component;
