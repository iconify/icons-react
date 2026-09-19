import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0n0-5b2v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0n0-5b2v"/>`,
		"fallback": "fa7-solid:hand-point-right",
	});
}

export default Component;
