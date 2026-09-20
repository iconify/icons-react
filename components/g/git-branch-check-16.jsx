import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_kx0ab8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_kx0ab8w"/>`,
		"fallback": "octicon:git-branch-check-16",
	});
}

export default Component;
