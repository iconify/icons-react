import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgb1p3bxd.css';
import '../../css/r/rlnza7pox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgb1p3bxd"/><path class="rlnza7pox"/>`,
		"fallback": "cil:input",
	});
}

export default Component;
