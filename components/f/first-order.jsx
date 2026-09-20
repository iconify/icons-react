import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgxw63bss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgxw63bss"/>`,
		"fallback": "la:first-order",
	});
}

export default Component;
