import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeqs3cbpz.css';
import '../../css/f/fvpx17bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeqs3cbpz"/><path class="fvpx17bce"/>`,
		"fallback": "solar:backspace-bold-duotone",
	});
}

export default Component;
