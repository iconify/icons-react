import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qst2e4_nj.css';
import '../../css/w/w7a4y5boz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qst2e4_nj"/><path class="w7a4y5boz"/>`,
		"fallback": "garden:credit-card-stroke-16",
	});
}

export default Component;
