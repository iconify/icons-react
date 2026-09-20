import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_05a9drp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_05a9drp"/>`,
		"fallback": "oui:editor-position-top-left",
	});
}

export default Component;
