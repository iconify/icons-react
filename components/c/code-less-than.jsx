import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdwzo6u-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdwzo6u-v"/>`,
		"fallback": "mdi:code-less-than",
	});
}

export default Component;
