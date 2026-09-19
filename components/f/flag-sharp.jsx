import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usz0agbob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usz0agbob"/>`,
		"fallback": "ion:flag-sharp",
	});
}

export default Component;
