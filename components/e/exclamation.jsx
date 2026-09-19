import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zryyp6ntt.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zryyp6ntt"/>`,
		"fallback": "fa-solid:exclamation",
	});
}

export default Component;
