import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2_vu7bxs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2_vu7bxs"/>`,
		"fallback": "oui:controls-vertical",
	});
}

export default Component;
