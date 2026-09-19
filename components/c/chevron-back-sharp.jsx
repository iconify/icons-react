import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uim1q5fzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uim1q5fzl"/>`,
		"fallback": "famicons:chevron-back-sharp",
	});
}

export default Component;
