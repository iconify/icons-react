import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3b2fn1ti.css';
import '../../css/i/i_b6kebet.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3b2fn1ti"/><path class="i_b6kebet"/>`,
		"fallback": "foundation:download",
	});
}

export default Component;
