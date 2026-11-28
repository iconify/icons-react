import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki94p-fap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki94p-fap"/>`,
		"fallback": "iconaut:github-solid",
	});
}

export default Component;
