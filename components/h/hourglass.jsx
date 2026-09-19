import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at64shbkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at64shbkj"/>`,
		"fallback": "charm:hourglass",
	});
}

export default Component;
