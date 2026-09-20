import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l91ls0zuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l91ls0zuy"/>`,
		"fallback": "ri:git-close-pull-request-fill",
	});
}

export default Component;
