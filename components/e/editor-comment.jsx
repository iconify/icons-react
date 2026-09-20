import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-w45po5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-w45po5g"/>`,
		"fallback": "oui:editor-comment",
	});
}

export default Component;
