import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb65a0hev.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb65a0hev"/>`,
		"fallback": "streamline-pixel:hand-ok",
	});
}

export default Component;
