import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw-q3pb-z.css';
import '../../css/u/utb2ysxhh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw-q3pb-z"/><path class="utb2ysxhh"/>`,
		"fallback": "fxemoji:glasses",
	});
}

export default Component;
