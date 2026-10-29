import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-0yys_yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-0yys_yi"/>`,
		"fallback": "withicons:git-branch-solid",
	});
}

export default Component;
