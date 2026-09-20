import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcnm0i4-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcnm0i4-l"/>`,
		"fallback": "roentgen:bench-with-shelter",
	});
}

export default Component;
