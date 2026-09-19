import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_is_8w5j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_is_8w5j"/>`,
		"fallback": "fa7-solid:clover",
	});
}

export default Component;
