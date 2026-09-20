import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-aj40bsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-aj40bsz"/>`,
		"fallback": "roentgen:flagpole",
	});
}

export default Component;
