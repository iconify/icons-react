import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cset7o1an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cset7o1an"/>`,
		"fallback": "coolicons:chevron-left-small-round",
	});
}

export default Component;
