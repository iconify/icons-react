import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr6xv7y8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr6xv7y8g"/>`,
		"fallback": "at-icons:git-fork",
	});
}

export default Component;
