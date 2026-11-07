import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr006pb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr006pb1i"/>`,
		"fallback": "solar:file-stack-broken",
	});
}

export default Component;
