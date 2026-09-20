import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-lfmccxy.css';
import '../../css/v/v2gr9gvbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-lfmccxy"/><path class="v2gr9gvbu"/>`,
		"fallback": "octicon:comment-locked-16",
	});
}

export default Component;
