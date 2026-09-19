import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd8v6pb9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd8v6pb9t"/>`,
		"fallback": "bi:globe-americas",
	});
}

export default Component;
