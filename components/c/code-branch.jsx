import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehb82bc3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehb82bc3k"/>`,
		"fallback": "uil:code-branch",
	});
}

export default Component;
