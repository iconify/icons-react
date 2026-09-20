import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pan_fhbhm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pan_fhbhm"/>`,
		"fallback": "ix:error-multiple",
	});
}

export default Component;
