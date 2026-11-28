import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q74fwu1qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q74fwu1qf"/>`,
		"fallback": "iconaut:git-branch-duotone",
	});
}

export default Component;
