import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m34w601zr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m34w601zr"/>`,
		"fallback": "octicon:comment-discussion",
	});
}

export default Component;
