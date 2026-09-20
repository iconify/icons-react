import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwl5agbtj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwl5agbtj"/>`,
		"fallback": "octicon:comment-fill-16",
	});
}

export default Component;
