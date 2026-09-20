import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5oe7xhjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5oe7xhjh"/>`,
		"fallback": "keyline-icons:git-pull-request-plus",
	});
}

export default Component;
