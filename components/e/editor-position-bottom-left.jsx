import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3n-2sleg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3n-2sleg"/>`,
		"fallback": "oui:editor-position-bottom-left",
	});
}

export default Component;
