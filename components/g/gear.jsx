import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptv7zfbip.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptv7zfbip"/>`,
		"fallback": "f7:gear",
	});
}

export default Component;
