import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fay30qbnc.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fay30qbnc"/>`,
		"fallback": "fontisto:bluetooth-b",
	});
}

export default Component;
