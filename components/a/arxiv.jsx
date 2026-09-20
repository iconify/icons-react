import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qse-3obuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qse-3obuw"/>`,
		"fallback": "thesvg:arxiv",
	});
}

export default Component;
