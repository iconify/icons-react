import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7i0tzjj.css';
import '../../css/s/s47q5obuv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7i0tzjj"/><path class="s47q5obuv"/>`,
		"fallback": "cil:basket",
	});
}

export default Component;
