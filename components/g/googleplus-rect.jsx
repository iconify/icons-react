import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw10q5bny.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw10q5bny"/>`,
		"fallback": "websymbol:googleplus-rect",
	});
}

export default Component;
