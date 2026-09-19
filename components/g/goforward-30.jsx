import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0p73jorn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0p73jorn"/>`,
		"fallback": "f7:goforward-30",
	});
}

export default Component;
