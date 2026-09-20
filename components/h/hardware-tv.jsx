import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-g4x1p4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-g4x1p4o"/>`,
		"fallback": "nrk:hardware-tv",
	});
}

export default Component;
