import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anbyo2-le.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anbyo2-le"/>`,
		"fallback": "vaadin:curly-brackets",
	});
}

export default Component;
