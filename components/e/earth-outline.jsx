import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlvflab6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlvflab6g"/>`,
		"fallback": "lsicon:earth-outline",
	});
}

export default Component;
