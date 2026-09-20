import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-64hbpsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-64hbpsi"/>`,
		"fallback": "token:hbb",
	});
}

export default Component;
