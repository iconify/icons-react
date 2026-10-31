import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0f4p2b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0f4p2b2w"/>`,
		"fallback": "coolicons:arrow-up-right-small-fill-round",
	});
}

export default Component;
