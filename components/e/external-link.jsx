import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av-0g0bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av-0g0bal"/>`,
		"fallback": "ci:external-link",
	});
}

export default Component;
