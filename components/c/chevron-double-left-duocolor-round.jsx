import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b73s-ci7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b73s-ci7r"/>`,
		"fallback": "coolicons:chevron-double-left-duocolor-round",
	});
}

export default Component;
