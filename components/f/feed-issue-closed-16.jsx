import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jknpy-b7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jknpy-b7m"/>`,
		"fallback": "octicon:feed-issue-closed-16",
	});
}

export default Component;
