import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baywupb7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baywupb7r"/>`,
		"fallback": "octicon:arrow-up-16",
	});
}

export default Component;
