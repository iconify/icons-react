import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_b0dbrd.css';
import '../../css/j/joidnyzty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_b0dbrd"/><path class="joidnyzty"/>`,
		"fallback": "fxemoji:earofrice",
	});
}

export default Component;
