import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysw2m96bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysw2m96bb"/>`,
		"fallback": "pixelarticons:git-pull-request",
	});
}

export default Component;
