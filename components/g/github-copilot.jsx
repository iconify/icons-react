import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytk4757ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytk4757ik"/>`,
		"fallback": "thesvg:github-copilot",
	});
}

export default Component;
