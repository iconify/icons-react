import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd_096brd.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd_096brd"/>`,
		"fallback": "topcoat:googleplus",
	});
}

export default Component;
