import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnfy8db-e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnfy8db-e"/>`,
		"fallback": "sidekickicons:git-branch-16-solid",
	});
}

export default Component;
