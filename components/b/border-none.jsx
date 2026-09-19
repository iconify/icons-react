import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru6u8jb_b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru6u8jb_b"/>`,
		"fallback": "fa7-solid:border-none",
	});
}

export default Component;
