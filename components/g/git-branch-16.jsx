import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h98d8zbox.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h98d8zbox"/>`,
		"fallback": "octicon:git-branch-16",
	});
}

export default Component;
