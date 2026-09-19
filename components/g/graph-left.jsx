import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvb739bsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvb739bsz"/>`,
		"fallback": "codicon:graph-left",
	});
}

export default Component;
