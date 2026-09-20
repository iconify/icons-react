import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nts4t-bvo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nts4t-bvo"/>`,
		"fallback": "la:github-square",
	});
}

export default Component;
