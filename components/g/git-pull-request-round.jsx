import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yszcwkbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yszcwkbdq"/>`,
		"fallback": "coolicons:git-pull-request-round",
	});
}

export default Component;
