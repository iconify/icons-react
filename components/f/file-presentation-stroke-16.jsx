import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0qehx2cc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0qehx2cc"/>`,
		"fallback": "garden:file-presentation-stroke-16",
	});
}

export default Component;
