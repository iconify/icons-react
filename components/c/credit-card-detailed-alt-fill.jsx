import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9phxfb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9phxfb0l"/>`,
		"fallback": "si:credit-card-detailed-alt-fill",
	});
}

export default Component;
