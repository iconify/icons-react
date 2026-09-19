import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk8gf1b0k.css';
import '../../css/x/xtkl7sp6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk8gf1b0k"/><path class="xtkl7sp6d"/>`,
		"fallback": "boxicons:exposure",
	});
}

export default Component;
