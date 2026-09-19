import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppl-i9bjl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppl-i9bjl"/>`,
		"fallback": "fa7-brands:accessible-icon",
	});
}

export default Component;
