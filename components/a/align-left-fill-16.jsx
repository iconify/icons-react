import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv97p5bqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv97p5bqs"/>`,
		"fallback": "garden:align-left-fill-16",
	});
}

export default Component;
