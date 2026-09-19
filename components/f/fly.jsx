import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7cc2_5lo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7cc2_5lo"/>`,
		"fallback": "fa7-brands:fly",
	});
}

export default Component;
