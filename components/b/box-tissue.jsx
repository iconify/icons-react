import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nth9yctlc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nth9yctlc"/>`,
		"fallback": "fa6-solid:box-tissue",
	});
}

export default Component;
