import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en5m6dbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en5m6dbqk"/>`,
		"fallback": "simple-icons:googlebard",
	});
}

export default Component;
