import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q94xyqb6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q94xyqb6e"/>`,
		"fallback": "qlementine-icons:github-16",
	});
}

export default Component;
