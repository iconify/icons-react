import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8rw7r2au.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8rw7r2au"/>`,
		"fallback": "dinkie-icons:briefcase-small",
	});
}

export default Component;
