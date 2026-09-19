import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk2py0bmp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk2py0bmp"/>`,
		"fallback": "fxemoji:crescentmoon",
	});
}

export default Component;
