import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-y8l3b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-y8l3b9x"/>`,
		"fallback": "guidance:fingerprint-scan",
	});
}

export default Component;
