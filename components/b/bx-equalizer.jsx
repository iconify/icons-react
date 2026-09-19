import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv33s8bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv33s8bwk"/>`,
		"fallback": "bx:bx-equalizer",
	});
}

export default Component;
