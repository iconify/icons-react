import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsn7_zb9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsn7_zb9v"/>`,
		"fallback": "lsicon:center-horizontally-outline",
	});
}

export default Component;
