import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzhxep-4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzhxep-4m"/>`,
		"fallback": "cil:battery-0",
	});
}

export default Component;
