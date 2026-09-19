import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4312iv_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4312iv_m"/>`,
		"fallback": "famicons:aperture",
	});
}

export default Component;
