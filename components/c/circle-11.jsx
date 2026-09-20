import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1gq_obxr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1gq_obxr"/>`,
		"fallback": "roentgen:circle-11",
	});
}

export default Component;
