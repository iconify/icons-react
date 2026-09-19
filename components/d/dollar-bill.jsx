import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyoonebhp.css';
import '../../css/i/i7yk66pmz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyoonebhp"/><path class="i7yk66pmz"/>`,
		"fallback": "foundation:dollar-bill",
	});
}

export default Component;
