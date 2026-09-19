import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayzny56qx.css';
import '../../css/z/znznyqb7x.css';
import '../../css/o/ogxcobpnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayzny56qx"/><path class="znznyqb7x"/><path class="ogxcobpnn"/>`,
		"fallback": "fxemoji:electrictorch",
	});
}

export default Component;
