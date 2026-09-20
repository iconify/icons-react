import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr5lrxbeo.css';
import '../../css/y/y5hdzhbmr.css';
import '../../css/y/yi3irnyqf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr5lrxbeo"/><path class="y5hdzhbmr"/><path class="yi3irnyqf"/>`,
		"fallback": "openmoji:black-medium-square",
	});
}

export default Component;
