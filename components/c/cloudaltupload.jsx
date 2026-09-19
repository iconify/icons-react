import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic3wg7_sk.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic3wg7_sk"/>`,
		"fallback": "whh:cloudaltupload",
	});
}

export default Component;
