import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2ix4wils.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2ix4wils"/>`,
		"fallback": "bi:arrow-right-circle",
	});
}

export default Component;
