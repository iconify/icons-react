import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8-ol_24k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8-ol_24k"/>`,
		"fallback": "octicon:git-merge-queue-24",
	});
}

export default Component;
