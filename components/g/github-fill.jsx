import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqxt5mdob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqxt5mdob"/>`,
		"fallback": "ri:github-fill",
	});
}

export default Component;
