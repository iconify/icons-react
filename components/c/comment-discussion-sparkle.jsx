import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywile0box.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywile0box"/>`,
		"fallback": "codicon:comment-discussion-sparkle",
	});
}

export default Component;
