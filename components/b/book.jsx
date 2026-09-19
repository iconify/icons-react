import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl8_fac6d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl8_fac6d"/>`,
		"fallback": "fa7-solid:book",
	});
}

export default Component;
