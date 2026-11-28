import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w123mzbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary w123mzbsi"/>`,
		"fallback": "iconaut:align-center-duotone",
	});
}

export default Component;
