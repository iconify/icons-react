import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os_e7fbgt.css';
import '../../css/b/b8g_udb9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os_e7fbgt"/><path class="b8g_udb9j"/>`,
		"fallback": "carbon:chip",
	});
}

export default Component;
