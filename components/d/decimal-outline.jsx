import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo3u2n3vu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo3u2n3vu"/>`,
		"fallback": "lsicon:decimal-outline",
	});
}

export default Component;
