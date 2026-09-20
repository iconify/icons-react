import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivqu7ub_s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivqu7ub_s"/>`,
		"fallback": "vaadin:home-o",
	});
}

export default Component;
