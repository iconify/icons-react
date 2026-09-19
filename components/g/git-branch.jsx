import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnqsujb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnqsujb8v"/>`,
		"fallback": "boxicons:git-branch",
	});
}

export default Component;
